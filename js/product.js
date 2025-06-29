document.addEventListener('DOMContentLoaded', function() {
    console.log('Product page loaded, checking dependencies...');

    const checkDependencies = setInterval(() => {
        if (window.GlobalProducts && window.CartManager && typeof Swiper !== 'undefined') {
            clearInterval(checkDependencies);
            console.log('All dependencies loaded, initializing...');
            initializeProductPage();
            setupCartEventListeners();
            setupCartPersistence();
            updateAddToCartButtons();

            // Обработчик для сброса кнопок после оформления заказа
            document.addEventListener('cartCleared', function() {
                resetAllAddToCartButtons();
            });
        }
    }, 100);

    function setupCartPersistence() {
        window.addEventListener('beforeunload', () => {
            if (window.CartManager) {
                window.CartManager.saveCart();
            }
        });

        window.addEventListener('pagehide', () => {
            if (window.CartManager) {
                window.CartManager.saveCart();
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden' && window.CartManager) {
                window.CartManager.saveCart();
            }
        });
    }

    function initializeProductPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const productDetail = document.getElementById('productDetail');

        if (!productDetail) {
            console.error('Product detail element not found');
            showProductNotFound();
            return;
        }

        if (!productId || isNaN(productId)) {
            console.error('Invalid product ID');
            showProductNotFound();
            return;
        }

        // Настраиваем обработчики для модального окна подтверждения заказа
        setupOrderConfirmationModalListener();
        loadProduct(productId);
    }

    function setupOrderConfirmationModalListener() {
        // Обработчик для закрытия модального окна подтверждения заказа
        document.addEventListener('click', function(e) {
            const confirmationModal = document.querySelector('.order-confirmation-modal');
            if (!confirmationModal) return;

            // Обработка клика на кнопки закрытия
            if (e.target.closest('.close-modal') || e.target.closest('.close-confirmation')) {
                resetAllAddToCartButtons();
            }

            // Обработка клика вне модального окна
            if (e.target === confirmationModal) {
                resetAllAddToCartButtons();
            }
        });

        // Универсальный обработчик для события закрытия модального окна
        document.addEventListener('modalClosed', function() {
            resetAllAddToCartButtons();
        });
    }

    function updateAddToCartButtons() {
        if (!window.CartManager) return;

        document.querySelectorAll('.add-to-cart').forEach(btn => {
            const productId = parseInt(btn.dataset.id);
            const volume = btn.dataset.volume || null;
            const isInCart = window.CartManager.isProductInCart(productId, volume);

            updateButtonAppearance(btn, isInCart);
        });
    }

    function updateButtonAppearance(button, isInCart) {
        if (isInCart) {
            button.innerHTML = '<i class="fas fa-check"></i> В корзине';
            button.style.backgroundColor = '#4CAF50';
            button.classList.add('in-cart');
            button.disabled = true;
        } else {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i> В корзину';
            button.style.backgroundColor = '';
            button.classList.remove('in-cart');
            button.disabled = false;
        }
    }

    function resetAllAddToCartButtons() {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.innerHTML = '<i class="fas fa-shopping-cart"></i> В корзину';
            btn.style.backgroundColor = '';
            btn.classList.remove('in-cart');
            btn.disabled = false;
        });
    }

    function setupCartEventListeners() {
        console.log('Setting up cart event listeners...');

        // Обработчик для кнопок "В корзину"
        document.addEventListener('click', function(e) {
            const cartButton = e.target.closest('.add-to-cart');
            if (!cartButton || cartButton.classList.contains('in-cart')) return;

            e.preventDefault();
            e.stopPropagation();

            const productId = parseInt(cartButton.dataset.id);
            const volume = cartButton.dataset.volume || null;
            const product = window.GlobalProducts.getProductById(productId);

            if (!product || !window.CartManager) return;

            const processedProduct = window.GlobalProducts._processBrands(product);
            window.CartManager.addToCart(processedProduct, volume);
            updateAddToCartButtons();

            // Показываем уведомление
            const volumeSuffix = volume ? ` (${volume} мл)` : '';
            const productName = processedProduct.title + volumeSuffix;
            window.CartManager.showCartNotification(productName);

            // Обновляем корзину если она открыта
            const cartModal = document.getElementById('cartModal');
            if (cartModal?.classList.contains('active')) {
                window.CartManager.renderCartItems();
            }
        });

        // Инициализация счетчика корзины
        if (window.CartManager) {
            window.CartManager.updateCartCounter();
        }
    }

    function loadProduct(productId) {
        console.log('Loading product:', productId);
        if (!window.GlobalProducts || typeof window.GlobalProducts.getProductById !== 'function') {
            console.error('GlobalProducts not available');
            showProductNotFound();
            return;
        }

        const product = window.GlobalProducts.getProductById(productId);

        if (!product) {
            showProductNotFound();
            return;
        }

        const processedProduct = window.GlobalProducts._processBrands(product);
        renderProductPage(processedProduct);

        // Загрузка похожих товаров
        let allProducts = [];
        if (Array.isArray(window.GlobalProducts.products)) {
            allProducts = window.GlobalProducts.products;
        } else if (typeof window.GlobalProducts.getProducts === 'function') {
            allProducts = window.GlobalProducts.getProducts();
        } else {
            console.error('Failed to get products list');
            return;
        }

        loadSimilarProducts(allProducts, processedProduct.brand, productId);
    }

    function loadSimilarProducts(allProducts, brand, currentProductId) {
        if (!Array.isArray(allProducts)) {
            console.error('allProducts should be an array');
            return;
        }

        const similarProducts = allProducts.filter(product => {
            return product.brand === brand && product.id !== currentProductId;
        });

        if (similarProducts.length === 0) {
            const popularProductsSection = document.querySelector('.popular-products');
            if (popularProductsSection) {
                popularProductsSection.style.display = 'none';
            }
            return;
        }

        renderSimilarProductsSlider(similarProducts);
    }

    function renderSimilarProductsSlider(products) {
        const swiperWrapper = document.querySelector('.popular-products-swiper .swiper-wrapper');
        if (!swiperWrapper) return;

        swiperWrapper.innerHTML = '';

        products.forEach(product => {
            const processed = window.GlobalProducts._processBrands(product);
            const defaultVolume = processed.defaultVolume || (processed.volumes ? processed.volumes[0] : null);
            const defaultPrice = processed.prices ?
                processed.prices[defaultVolume] :
                processed.price;

            const productCard = document.createElement('div');
            productCard.className = 'swiper-slide';
            productCard.innerHTML = `
                <div class="product-card">
                    <div class="product-image-container">
                        <a href="product.html?id=${processed.id}" class="product-link">
                            <div class="product-image">
                                <img src="${processed.image || processed.images?.[0]}" alt="${processed.title}" loading="lazy">
                                ${processed.badge ? `<span class="product-badge">${processed.badge}</span>` : ''}
                            </div>
                        </a>
                    </div>
                    <div class="product-info">
                        <a href="product.html?id=${processed.id}" class="product-title-link">
                            <h3 class="product-title">${processed.title}</h3>
                            <p class="product-description">${processed.shortDescription || ''}</p>
                        </a>
                        ${processed.volumes && processed.volumes.length > 1 ? `
                        <div class="volume-selector">
                            ${processed.volumes.map(ml => `
                                <button class="volume-btn ${ml === defaultVolume ? 'active' : ''}"
                                        data-ml="${ml}"
                                        data-id="${processed.id}">
                                    ${ml} мл
                                </button>
                            `).join('')}
                        </div>
                        ` : ''}
                        <div class="product-footer">
                            <div class="product-price" data-id="${processed.id}">${defaultPrice.toLocaleString()} BYN</div>
                            <button class="add-to-cart" data-id="${processed.id}" ${processed.volumes ? `data-volume="${defaultVolume}"` : ''}>
                                <i class="fas fa-shopping-cart"></i> В корзину
                            </button>
                        </div>
                    </div>
                </div>
            `;

            swiperWrapper.appendChild(productCard);
        });

        initSimilarProductsSlider();
        setupVolumeButtonsListeners();

        updateAddToCartButtons();
    }

    function initSimilarProductsSlider() {
        const swiperContainer = document.querySelector('.popular-products-swiper');
        if (!swiperContainer) return;

        if (swiperContainer.swiper) {
            swiperContainer.swiper.destroy(true, true);
        }

        swiperContainer.swiper = new Swiper('.popular-products-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.popular-products-next',
                prevEl: '.popular-products-prev',
            },
            breakpoints: {
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 }
            }
        });
    }

    function setupVolumeButtonsListeners() {
        // Обработчики для кнопок объема в слайдере
        document.querySelectorAll('.volume-selector .volume-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();

                const productCard = this.closest('.product-card');
                const productId = parseInt(this.dataset.id);
                const ml = this.dataset.ml;
                const product = window.GlobalProducts.getProductById(productId);

                if (!product) return;

                // Обновляем активную кнопку объема
                this.closest('.volume-selector').querySelectorAll('.volume-btn').forEach(b => {
                    b.classList.remove('active');
                });
                this.classList.add('active');

                // Обновляем цену
                const priceElement = productCard.querySelector('.product-price');
                if (priceElement && product.prices) {
                    priceElement.textContent = product.prices[ml].toLocaleString() + ' BYN';
                }

                // Обновляем data-volume у кнопки "В корзину"
                const addToCartBtn = productCard.querySelector('.add-to-cart');
                if (addToCartBtn) {
                    addToCartBtn.dataset.volume = ml;
                    updateButtonAppearance(addToCartBtn, window.CartManager.isProductInCart(productId, ml));
                }
            });
        });
    }

    function showProductNotFound() {
        const productDetail = document.getElementById('productDetail');
        if (productDetail) {
            productDetail.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Товар не найден</p>
                    <a href="/" class="button">Вернуться в каталог</a>
                </div>
            `;
        }
    }

    function renderProductPage(product) {
        const productDetail = document.getElementById('productDetail');
        if (!productDetail) return;

        let specsHtml = '';
        if (product.specs && Object.keys(product.specs).length > 0) {
            for (const [key, value] of Object.entries(product.specs)) {
                specsHtml += `<tr><td>${key}</td><td>${value}</td></tr>`;
            }
        }

        let imagesHtml = '';
        const productImages = product.images || (product.image ? [product.image] : []);
        productImages.forEach((img, index) => {
            imagesHtml += `
                <div class="product-thumb ${index === 0 ? 'active' : ''}">
                    <img src="${img}" alt="${product.title} ${index + 1}" loading="lazy">
                </div>
            `;
        });

        const price = product.prices ? product.prices[product.defaultVolume || "200"] : product.price;
        let priceHtml = '';
        if (product.oldPrice && product.discount) {
            priceHtml = `
                <div class="product-old-price">${product.oldPrice.toLocaleString()} BYN</div>
                <div class="product-discount">-${product.discount}%</div>
                <div class="product-current-price">${price.toLocaleString()} BYN</div>
            `;
        } else {
            priceHtml = `<div class="product-current-price">${price.toLocaleString()} BYN</div>`;
        }

        let volumeSelectorHtml = '';
        if (product.prices && product.volumes && product.volumes.length > 1) {
            volumeSelectorHtml = `
                <div class="volume-selector products-selectors">
                    ${product.volumes.map(volume => `
                        <button class="volume-btn ${volume === (product.defaultVolume || product.volumes[0]) ? 'active' : ''}"
                                data-volume="${volume}"
                                data-price="${product.prices[volume]}">
                            ${volume} мл
                        </button>
                    `).join('')}
                </div>
            `;
        }

        let descriptionHtml = '';
        if (product.fullDescription) {
            descriptionHtml = `
                <div class="product-description">
                    <h3>Описание</h3>
                    ${product.fullDescription}
                </div>
            `;
        } else if (product.shortDescription) {
            descriptionHtml = `
                <div class="product-description">
                    <h3>Описание</h3>
                    <p>${product.shortDescription}</p>
                </div>
            `;
        } else {
            descriptionHtml = `
                <div class="product-description">
                    <h3>Описание</h3>
                    <p>Описание товара отсутствует</p>
                </div>
            `;
        }

        productDetail.innerHTML = `
            <div class="product-gallery">
                <div class="product-main-image">
                    <img src="${productImages[0] || ''}"
                         alt="${product.title}"
                         loading="lazy">
                </div>
                ${productImages.length > 1 ? `
                <div class="product-thumbnails">
                    ${imagesHtml}
                </div>
                ` : ''}
            </div>

            <div class="product-info products-infos">
                <div class="product-header">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <h1 class="product-title" id="products-titles">${product.title}</h1>
                </div>

                <div class="product-prices">
                    ${priceHtml}
                </div>

                ${volumeSelectorHtml}

                <div class="product-actions">
                    <button class="add-to-cart large" data-id="${product.id}" ${product.volumes ? `data-volume="${product.defaultVolume || product.volumes[0]}"` : ''}>
                        <i class="fas fa-shopping-cart"></i> В корзину
                    </button>
                </div>

                ${descriptionHtml}

                ${specsHtml ? `
                <div class="product-specs">
                    <h3>Характеристики</h3>
                    <table>
                        <tbody>${specsHtml}</tbody>
                    </table>
                </div>
                ` : ''}
            </div>
        `;

        // Обработчики событий для кнопок объема
        if (product.prices && product.volumes && product.volumes.length > 1) {
            document.querySelectorAll('.volume-selector.products-selectors .volume-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();

                    this.closest('.volume-selector').querySelectorAll('.volume-btn').forEach(b => {
                        b.classList.remove('active');
                    });

                    this.classList.add('active');

                    const newVolume = this.dataset.volume;
                    const newPrice = product.prices[newVolume];
                    document.querySelector('.product-current-price').textContent = newPrice.toLocaleString() + ' BYN';

                    const addToCartBtn = document.querySelector('.add-to-cart.large');
                    if (addToCartBtn) {
                        addToCartBtn.dataset.volume = newVolume;
                        updateAddToCartButtons();
                    }
                });
            });
        }

        // Обработчики для миниатюр изображений
        if (productImages.length > 1) {
            document.querySelectorAll('.product-thumb').forEach(thumb => {
                thumb.addEventListener('click', function() {
                    const imgSrc = this.querySelector('img')?.src;
                    if (imgSrc) {
                        const mainImg = document.querySelector('.product-main-image img');
                        if (mainImg) mainImg.src = imgSrc;
                    }

                    document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        }

        updateAddToCartButtons();
    }
});