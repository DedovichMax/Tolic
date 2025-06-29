// Основная функция инициализации поиска
function initSearch() {
    console.log('Initializing search functionality...');

    // Получаем элементы DOM
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResultsModal = document.getElementById('searchResultsModal');
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    const closeSearchResults = document.querySelector('.close-search-results');

    // Проверяем наличие всех необходимых элементов
    if (!searchForm || !searchInput || !searchResultsModal || !searchResultsContainer || !closeSearchResults) {
        console.error('Some search elements are missing!');
        return;
    }

    // Обработчик отправки формы
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm.length < 2) {
            alert("Введите минимум 2 символа для поиска");
            return;
        }
        performSearch(searchTerm);
    });

    // Обработчик закрытия модального окна
    closeSearchResults.addEventListener('click', function() {
        searchResultsModal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Закрытие по клику вне окна
    window.addEventListener('click', function(e) {
        if (e.target === searchResultsModal) {
            searchResultsModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && searchResultsModal.style.display === "block") {
            searchResultsModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    console.log('Search functionality initialized successfully');
}

// Функция выполнения поиска
function performSearch(searchTerm) {
    const searchResultsModal = document.getElementById('searchResultsModal');
    const searchResultsContainer = document.getElementById('searchResultsContainer');

    try {
        const allProducts = window.GlobalProducts.getAllProducts();
        const results = allProducts.filter(product => {
            const searchLower = searchTerm.toLowerCase();
            const titleMatch = product.title && product.title.toLowerCase().includes(searchLower);
            const brandMatch = product.brand && product.brand.toLowerCase().includes(searchLower);
            const typeMatch = product.type && product.type.toLowerCase().includes(searchLower);
            return titleMatch || brandMatch || typeMatch;
        });

        displaySearchResults(results);
        searchResultsModal.style.display = "block";
        document.body.style.overflow = "hidden";
    } catch (e) {
        console.error('Search error:', e);
        searchResultsContainer.innerHTML = `
            <div class="no-results-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Ошибка при выполнении поиска</p>
            </div>
        `;
        searchResultsModal.style.display = "block";
    }
}

// Функция отображения результатов
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResultsContainer');

    if (!results || results.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="no-results-message">
                <i class="fas fa-search"></i>
                <p>По вашему запросу ничего не найдено</p>
            </div>
        `;
        return;
    }

    let html = '';
    results.forEach(product => {
        const defaultPrice = product.prices ?
            (product.prices[product.defaultVolume || "250"] || "Цена не указана") :
            "Цена не указана";

        let category = 'HairCare';
        if (product.type) {
            category = product.type.replace(/\s+/g, '');
            if (category === "Combs&Accessories") category = "CombsAndAccessories";
            else if (category === "Men'sGrooming") category = "MenCosmetics";
        }

        html += `
            <a href="newFile.html?collection=${category}&product=${product.id}" class="search-result-item">
                <img src="${product.image || 'images/default-product.jpg'}" alt="${product.title}">
                <div class="search-result-info">
                    <div class="search-result-title">${product.title}</div>
                    <div class="search-result-brand">${product.brand || 'Бренд не указан'}</div>
                    <div class="search-result-price">${defaultPrice} BYN</div>
                </div>
                <i class="fas fa-chevron-right"></i>
            </a>
        `;
    });

    searchResultsContainer.innerHTML = html;
}

// Инициализация после полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Даем время на загрузку всех элементов
    setTimeout(function() {
        // Проверяем, не была ли уже инициализирована улучшенная версия
        if (!window.searchInitialized) {
            initSearch();
            window.searchInitialized = true;
        }
    }, 300);
});

// Экспортируем функцию для глобального доступа
window.enhancedSearchInit = initSearch;