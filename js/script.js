try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
} catch (e) {
    console.error('LocalStorage is not available:', e);
    alert('Ваш браузер не поддерживает localStorage. Некоторые функции могут не работать.');
}

window.GlobalProducts = {
    brands: ["EchosLine", "newBrands", "omg"],
    availableVolumes: ["100", "250", "500"],
    types: ["Hair Care", "Face Care", "Body Care", "Handmade Products", "Styling", "Makeup", "Combs & Accessories", "Manicure Supplies", "Hair Coloring", "Brows & Lashes", "Men's Grooming", "Hair Removal", "Gift Sets"],

    _products: [], // Будет заполнен автоматически

    _additionalCollections: {
        //////////////////* ТОВАРЫ НЕДЕЛИ */////////////////////////
        ProductOfTheWeek: [
            {
                id: 1,
                title: "№1Шампунь для частого применения...",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 500,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 2,
                title: "№2Шампунь для частого применения...",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 200
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 3,
                title: "№3Шампунь для частого применения...",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 4,
                title: "№3Шампунь для частого применения...",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 5,
                title: "№3Шампунь для частого применения...",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],

        //////////////////* НОВИНКИ */////////////////////////
        newProducts: [
            {
                id: 101,
                title: "№1Шампунь для частого применения...",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 102,
                title: "№2Шампунь для частого применения...",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 103,
                title: "Шампунь для частого применения...",
                brand: "newBrands",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 320,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                image: "images/limba.jpeg",
                badge: "Хит",
                discount: null,
                defaultVolume: "200"
            },
            {
                id: 104,
                title: "№3Шампунь для частого применения...",
                brand: "EchosLine",
                type: "Face Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 450,
                    "200": 200,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 105,
                title: "Шампунь для частого применения...",
                brand: "newBrands",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                image: "images/limba.jpeg",
                badge: "Хит",
                discount: null,
                defaultVolume: "200"
            },
        ],
        ////////Косметика для волос	/////////////////////
        HairCare: [
            {
                id: 201,
                title: "№1 Косметика для волос",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 202,
                title: "№2 Косметика для волос",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 100,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 203,
                title: "№2 Косметика для волос",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 204,
                title: "№2 Косметика для волос",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
            {
                id: 205,
                title: "№2 Косметика для волос",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },

        ],
        //////////////////Уход для лица	/////////////////////////
        FaceCare: [
            {
                id: 301,
                title: "№1 Уход для лица",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        ///////////////Уход для тела//////////////////
        BodyCare: [
            {
                id: 401,
                title: "№1 Уход для тела",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        ////////////Изделия ручной работы//////////////
        Handmade: [
            {
                id: 501,
                title: "№1 Изделия ручной работы",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        ///////////////////Стайлинг///////////
        Styling: [
            {
                id: 601,
                title: "№1 Изделия ручной работы",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        ////////////////////Декоративная косметика////////////////
        Makeup: [
            {
                id: 701,
                title: "№1 Декоративная косметика",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        CombsAndAccessories: [
            {
                id: 801,
                title: "№1 Расчёски и аксессуары",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        ManicureTools: [
            {
                id: 901,
                title: "№1 Маникюрные принадлежности",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        HairColoring: [
            {
                id: 1001,
                title: "№1 Окрашивание волос",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        EyebrowsEyelashes: [
            {
                id: 1101,
                title: "№1 Брови и ресницы",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        MenCosmetics: [
            {
                id: 1201,
                title: "№1 Мужская косметика",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        HairRemoval: [
            {
                id: 1301,
                title: "№1 Депиляция",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
        Sets: [
            {
                id: 1401,
                title: "№1 Наборы",
                brand: "newBrands",
                type: "Hair Care",
                shortDescription: "6.1\" (2556x1179), OLED...",
                prices: {
                    "50": 1999,
                    "200": 3499,
                    "1100": 5999
                },
                volumes: ["50", "200", "1100"],
                defaultVolume: "200",
                image: "images/limba.jpeg",
                badge: "ХИТ",
                fullDescription: `<p>Это временный текст-заглушка...</p>`,
                images: ["images/limba.jpeg"],
                discount: null,
            },
        ],
    },

    // Инициализация - объединяем все продукты
    init: function () {
        this._products = [];

        // Добавляем все продукты из дополнительных коллекций
        for (const collection in this._additionalCollections) {
            this._products.push(...this._additionalCollections[collection]);
        }

        // Удаляем дубликаты по ID
        this._products = this._products.filter((product, index, self) =>
            index === self.findIndex((p) => p.id === product.id)
        );
    },

    getProductsByType: function (type) {
        return this._products.filter(product => product.type === type);
    },

    _processBrands: function (product) {
        const brandInTitle = this.brands.find(brand => product.title.startsWith(brand));
        if (brandInTitle) {
            return {
                ...product,
                brand: brandInTitle
            };
        }

        if (product.brand && this.brands.includes(product.brand)) {
            return {
                ...product,
                title: `${product.brand} ${product.title}`
            };
        }

        const defaultBrand = this.brands[0];
        return {
            ...product,
            brand: defaultBrand,
            title: `${defaultBrand} ${product.title}`
        };
    },

    getAllProducts: function () {
        return [...this._products];
    },

    getProducts: function () {
        return this._products;
    },

    getCollection: function (collectionName) {
        return this._additionalCollections[collectionName] || [];
    },

    getProductById: function (id) {
        const product = this._products.find(p => p.id === id);
        if (!product) return null;

        if (product.prices) {
            return {
                ...product,
                price: product.prices[product.defaultVolume || "250"]
            };
        }
        return product;
    }
};

// Инициализируем продукты
GlobalProducts.init();



window.CartManager = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    // Добавляем новый метод для проверки, есть ли товар в корзине
    isProductInCart: function(productId, volume = null) {
        return this.cart.some(item =>
            item.id === productId &&
            (item.volume === volume || (item.volume === null && volume === null))
        );
    },

    clearCart: function() {
        this.cart = [];
        this.saveCart();
        this.updateCartCounter();
        this.updateAddToCartButtons(); // Обновляем кнопки после очистки
        this.forceUpdateButtons();

        document.querySelectorAll('.add-to-cart, .add-to-cart-btn').forEach(button => {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i> В корзину';
            button.style.backgroundColor = '';
            button.classList.remove('in-cart');
        });

        // Обновляем содержимое корзины, если модальное окно открыто
        if (document.getElementById('cartModal')?.classList.contains('active')) {
            this.renderCartItems();
        }
    },

    forceUpdateButtons: function() {
        const buttons = document.querySelectorAll('.add-to-cart, .add-to-cart-btn');
        buttons.forEach(button => {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i> В корзину';
            button.style.backgroundColor = '';
            button.classList.remove('in-cart');
            button.disabled = false; // Возвращаем активность кнопке
        });
    },

    updateSingleButton: function(button) {
        const productId = parseInt(button.dataset.id);
        const volume = button.dataset.volume || null;
        const isInCart = this.isProductInCart(productId, volume);

        if (isInCart) {
            button.innerHTML = '<i class="fas fa-check"></i> В корзине';
            button.style.backgroundColor = '#4CAF50';
        } else {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i> В корзину';
            button.style.backgroundColor = '';
        }
    },

    addToCart: function(product, volume = null) {
        console.log('CartManager.addToCart called with:', product, volume);
        const fullProduct = GlobalProducts.getProductById(product.id);
        if (!fullProduct) {
            console.error('Product not found:', product.id);
            return;
        }

        // Определяем выбранный объем
        let selectedVolume = volume;

        // Если объем не передан, но у товара есть варианты объемов, берем первый доступный
        if (!selectedVolume && fullProduct.volumes && fullProduct.volumes.length > 0) {
            selectedVolume = fullProduct.volumes[0];
        }

        // Получаем цену
        let price;
        if (fullProduct.prices && selectedVolume) {
            price = fullProduct.prices[selectedVolume];
            if (price === undefined) {
                // Если цена для выбранного объема не найдена, используем первый доступный объем
                selectedVolume = Object.keys(fullProduct.prices)[0];
                price = fullProduct.prices[selectedVolume];
            }
        } else {
            // Если нет вариантов объемов, используем обычную цену
            price = fullProduct.price;
            selectedVolume = null; // Сбрасываем объем, так как его нет
        }

        if (price === undefined) {
            console.error('Price is undefined for product:', fullProduct);
            return;
        }

        const volumeSuffix = selectedVolume ? ` (${selectedVolume} мл)` : '';
        const processedProduct = GlobalProducts._processBrands(fullProduct);
        const productName = processedProduct.title + volumeSuffix;

        const existingItemIndex = this.cart.findIndex(item =>
            item.id === product.id &&
            ((item.volume === null && selectedVolume === null) || item.volume === selectedVolume)
        );

        if (existingItemIndex !== -1) {
            this.cart[existingItemIndex].quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                name: productName,
                price: price,
                image: product.image || fullProduct.image,
                quantity: 1,
                volume: selectedVolume,
                brand: processedProduct.brand
            });
        }

        this.saveCart();
        this.updateCartCounter();
        this.showCartNotification(productName);
        this.updateAddToCartButtons(); // Обновляем все кнопки "В корзину"

        if (document.getElementById('cartModal')?.classList.contains('active')) {
            this.renderCartItems();
        }


        setTimeout(() => {
            if (document.getElementById('cartModal')?.classList.contains('active')) {
                this.renderCartItems();
            }
        }, 50);
    },

    updateAddToCartButtons: function() {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            const productId = parseInt(btn.dataset.id);
            const volume = btn.dataset.volume || null;

            if (this.isProductInCart(productId, volume)) {
                btn.innerHTML = '<i class="fas fa-check"></i> В корзине';
                btn.style.backgroundColor = '#4CAF50';
                btn.classList.add('in-cart');
                btn.disabled = true; // Делаем кнопку неактивной
            } else {
                btn.innerHTML = '<i class="fas fa-shopping-cart"></i> В корзину';
                btn.style.backgroundColor = '';
                btn.classList.remove('in-cart');
                btn.disabled = false; // Возвращаем активность кнопке
            }
        });
    },

    saveCart: function () {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    },

    updateCartCounter: function () {
        const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelectorAll('.cart-counter').forEach(counter => {
            counter.textContent = totalItems;
            counter.style.display = totalItems > 0 ? 'flex' : 'none';
        });
    },

    renderCartItems: function () {
        const cartItemsContainer = document.getElementById('cartItems');
        if (!cartItemsContainer) return;

        if (this.cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Ваша корзина пуста</p>
                </div>
            `;
            document.querySelector('.total-amount').textContent = '0 BYN';
            return;
        }

        let itemsHTML = '';
        let total = 0;

        this.cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            itemsHTML += `
                <div class="cart-item" data-id="${item.id}" data-volume="${item.volume || ''}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">
                            ${item.brand ? `<span class="product-brand">${item.brand}</span> ` : ''}
                            ${item.name.replace(item.brand, '').trim()}
                        </h4>
                        <div class="cart-item-price">${item.price.toLocaleString()} BYN</div>
                        <div class="cart-item-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn minus">-</button>
                                <span class="quantity-value">${item.quantity}</span>
                                <button class="quantity-btn plus">+</button>
                            </div>
                            <button class="remove-item">Удалить</button>
                        </div>
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = itemsHTML;
        document.querySelector('.total-amount').textContent = `${total.toFixed(2)} BYN`;
        this.bindCartItemEvents();
    },

    bindCartItemEvents: function () {
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cartItem = e.target.closest('.cart-item');
                const id = parseInt(cartItem.dataset.id);
                const volume = cartItem.dataset.volume || null;
                this.updateQuantity(id, -1, volume);
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cartItem = e.target.closest('.cart-item');
                const id = parseInt(cartItem.dataset.id);
                const volume = cartItem.dataset.volume || null;
                this.updateQuantity(id, 1, volume);
            });
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cartItem = e.target.closest('.cart-item');
                const id = parseInt(cartItem.dataset.id);
                const volume = cartItem.dataset.volume || null;
                this.removeFromCart(id, volume);
            });
        });
    },

    updateQuantity: function (id, change, volume = null) {
        const item = this.cart.find(item =>
            item.id === id &&
            (item.volume === volume || (item.volume === null && volume === null))
        );

        if (item) {
            item.quantity += change;

            if (item.quantity <= 0) {
                this.cart = this.cart.filter(item =>
                    !(item.id === id &&
                        (item.volume === volume || (item.volume === null && volume === null)))
                );
            }
            this.saveCart();
            this.updateCartCounter();
            this.renderCartItems();
        }
    },

    removeFromCart: function(id, volume = null) {
        this.cart = this.cart.filter(item =>
            !(item.id === id &&
                (item.volume === volume || (item.volume === null && volume === null)))
        );
        this.saveCart();
        this.updateCartCounter();
        this.renderCartItems();
        this.updateAddToCartButtons(); // Обновляем кнопки после удаления
    },

    showAddToCartAnimation: function (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Добавлено';
        button.style.backgroundColor = '#4CAF50';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
            button.disabled = false;
        }, 2000);
    },

    showCartNotification: function (productName) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${productName} добавлен в корзину</span>
        `;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },
    init: function() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCounter();
        this.updateAddToCartButtons(); // Обновляем кнопки при инициализации
    },
};



// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
        // Проверяем существование элементов поиска
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');

        if (searchForm && searchInput && searchResults) {
            // Обработчик отправки формы
            searchForm.addEventListener('submit', function (e) {
                e.preventDefault();
                performSearch();
            });

            // Обработчик ввода текста (поиск при наборе)
            searchInput.addEventListener('input', function () {
                if (this.value.length > 2) {
                    performSearch();
                } else {
                    searchResults.style.display = 'none';
                }
            });

            // Функция выполнения поиска
            function performSearch() {
                const query = searchInput.value.toLowerCase().trim();

                if (query.length === 0) {
                    searchResults.style.display = 'none';
                    return;
                }

                // Получаем все продукты
                const allProducts = GlobalProducts.getAllProducts();

                // Фильтрация товаров
                const results = allProducts.filter(product => {
                    const titleMatch = product.title.toLowerCase().includes(query);
                    const descMatch = product.shortDescription && product.shortDescription.toLowerCase().includes(query);
                    const brandMatch = product.brand && product.brand.toLowerCase().includes(query);
                    const typeMatch = product.type && product.type.toLowerCase().includes(query);

                    return titleMatch || descMatch || brandMatch || typeMatch;
                });

                displayResults(results);
            }

            // Функция отображения результатов
            function displayResults(results) {
                searchResults.innerHTML = '';

                if (results.length === 0) {
                    searchResults.innerHTML = '<div class="no-results">Ничего не найдено</div>';
                    searchResults.style.display = 'block';
                    return;
                }

                // Ограничиваем количество результатов (по желанию)
                const limitedResults = results.slice(0, 10);

                limitedResults.forEach(product => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';

                    // Получаем цену продукта
                    let price = '';
                    if (product.prices) {
                        const defaultVolume = product.defaultVolume || Object.keys(product.prices)[0];
                        price = product.prices[defaultVolume] + ' BYN';
                    } else if (product.price) {
                        price = product.price + ' BYN';
                    }

                    item.innerHTML = `
                    <img src="${product.image || 'images/placeholder.jpg'}" alt="${product.title}">
                    <div>
                        <h4>${product.title}</h4>
                        <p>${product.type || ''}</p>
                    </div>
                    <div class="search-result-price">${price}</div>
                `;

                    item.addEventListener('click', function () {
                        // Переходим на страницу продукта
                        window.location.href = `product.html?id=${product.id}`;
                    });

                    searchResults.appendChild(item);
                });

                searchResults.style.display = 'block';
            }

            // Закрытие результатов при клике вне формы
            document.addEventListener('click', function (e) {
                if (!searchForm.contains(e.target)) {
                    searchResults.style.display = 'none';
                }
            });

            // Закрытие при нажатии ESC
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    searchResults.style.display = 'none';
                }
            });
        }

        // Рендеринг продуктов
        function renderProductsSection(productsArray, containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            container.innerHTML = productsArray.map(product => {
                const hasVolumes = product.prices && typeof product.prices === 'object';
                const volumes = product.volumes || GlobalProducts.availableVolumes;
                const defaultVolume = hasVolumes ? (product.defaultVolume || volumes[0]) : null;
                const defaultPrice = hasVolumes ? product.prices[defaultVolume] : product.price;

                // Добавляем бренд перед названием товара
                const productTitle = product.brand ? `${product.brand} ${product.title}` : product.title;

                return `
        <div class="swiper-slide">
            <div class="product-card">
                <div class="product-image-container">
                    <a href="product.html?id=${product.id}" class="product-link">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.title}" loading="lazy">
                            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                        </div>
                    </a>
                </div>
                <div class="product-info">
                    <a href="product.html?id=${product.id}" class="product-title-link">
                        <h3 class="product-title">${productTitle}</h3>
                        <p class="product-description">${product.shortDescription}</p>
                    </a>
                    ${hasVolumes ? `
                    <div class="volume-selector">
                        ${volumes.map(ml => `
                            <button class="volume-btn ${ml === defaultVolume ? 'active' : ''}" 
                                    data-ml="${ml}" 
                                    data-id="${product.id}">
                                ${ml} мл
                            </button>
                        `).join('')}
                    </div>
                    ` : ''}
                    <div class="product-footer">
                        <div class="product-price" data-id="${product.id}">${defaultPrice.toLocaleString()} BYN</div>
                        <button class="add-to-cart"  data-id="${product.id}" ${hasVolumes ? `data-volume="${defaultVolume}"` : ''}>
                            <i class="fas fa-shopping-cart"></i> В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
            }).join('');

            // Обработчик для кнопок выбора объема
            document.addEventListener('click', function(e) {
                const volumeBtn = e.target.closest('.volume-btn');
                if (!volumeBtn) return;

                e.preventDefault();

                const productId = volumeBtn.dataset.id;
                const selectedMl = volumeBtn.dataset.ml;
                const productCard = volumeBtn.closest('.product-card');

                // Удаляем активный класс у всех кнопок объема этого продукта
                productCard.querySelectorAll('.volume-btn').forEach(btn => {
                    btn.classList.remove('active');
                });

                // Добавляем активный класс к выбранной кнопке
                volumeBtn.classList.add('active');

                // Обновляем цену
                const product = GlobalProducts.getProductById(parseInt(productId));
                if (product && product.prices) {
                    const priceElement = productCard.querySelector(`.product-price[data-id="${productId}"]`);
                    if (priceElement) {
                        priceElement.textContent = `${product.prices[selectedMl].toLocaleString()} BYN`;
                    }
                }

                // Обновляем volume у кнопки "В корзину"
                const addToCartBtn = productCard.querySelector('.add-to-cart');
                if (addToCartBtn) {
                    addToCartBtn.dataset.volume = selectedMl;
                }
            });
        }
        // Рендерим все секции продуктов
        renderProductsSection(GlobalProducts.getCollection('ProductOfTheWeek'), 'productsContainer');
        renderProductsSection(GlobalProducts.getCollection('newProducts'), 'newProductsContainer');

        // Инициализация слайдеров
        if (typeof Swiper !== 'undefined') {
            new Swiper('.products-section:not(.new-products) .swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.slider-next',
                    prevEl: '.slider-prev',
                },
                breakpoints: {
                    320: {slidesPerView: 1},
                    480: {slidesPerView: 2},
                    768: {slidesPerView: 3},
                    992: {slidesPerView: 4}
                }
            });

            new Swiper('.new-products-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.new-products-next',
                    prevEl: '.new-products-prev',
                },
                breakpoints: {
                    320: {slidesPerView: 1},
                    480: {slidesPerView: 2},
                    768: {slidesPerView: 3},
                    992: {slidesPerView: 4}
                }
            });
        }

        // Обработчик для кнопок "В корзину"
        document.addEventListener('click', function (e) {
            const btn = e.target.closest('.add-to-cart');
            if (!btn) return;

            e.preventDefault();
            const productId = parseInt(btn.dataset.id);
            const volume = btn.dataset.volume || null;
            const product = GlobalProducts.getProductById(productId);

            if (product) {
                CartManager.addToCart(product, volume);
                // Убираем анимацию, так как теперь состояние сохраняется
                // CartManager.showAddToCartAnimation(btn);
            }
        });
        CartManager.init();

    }

)
;