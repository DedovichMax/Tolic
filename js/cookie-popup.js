// cookie-popup.js
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, было ли уже согласие
    if (!getCookie('cookie_consent')) {
        showCookiePopup();
    }

    // Инициализация обработчиков событий
    initCookieButtons();
});

function showCookiePopup() {
    const popupHTML = `
    <div id="cookie-popup" style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #f5f5f5;
        padding: 15px;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
        text-align: center;
    ">
        <p>Мы используем cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с этим.</p>
        <div style="margin-top: 10px;">
            <button id="accept-cookies" style="padding: 8px 15px; margin-right: 10px;">Принять</button>
            <button id="decline-cookies" style="padding: 8px 15px;">Отклонить</button>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function initCookieButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.id === 'accept-cookies') {
            setCookie('cookie_consent', 'accepted', 30);
            hideCookiePopup();
        }

        if (e.target.id === 'decline-cookies') {
            setCookie('cookie_consent', 'declined', 30);
            hideCookiePopup();
        }
    });
}

function hideCookiePopup() {
    const popup = document.getElementById('cookie-popup');
    if (popup) popup.remove();
}

// Вспомогательные функции для работы с cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) return cookieValue;
    }
    return null;
}