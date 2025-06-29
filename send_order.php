<?php
header('Content-Type: application/json');

// Проверяем, что запрос пришел методом POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не поддерживается']);
    exit;
}

// Получаем данные из тела запроса
$data = json_decode(file_get_contents('php://input'), true);

// Валидация данных
if (empty($data['customer']['name']) || empty($data['customer']['phone'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Не заполнены обязательные поля']);
    exit;
}

// Настройки email
$to = 'dedowitch.m@yandex.by'; // Замените на ваш email
$subject = 'Новый заказ с сайта Фиерия';
$headers = "From: no-reply@feya-shop.by\r\n";
$headers .= "Reply-To: no-reply@feya-shop.by\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Формируем тело письма
$message = "<html><body>";
$message .= "<h1>Новый заказ с сайта Фиерия</h1>";
$message .= "<p><strong>Имя:</strong> " . htmlspecialchars($data['customer']['name']) . "</p>";
$message .= "<p><strong>Телефон:</strong> " . htmlspecialchars($data['customer']['phone']) . "</p>";
$message .= "<p><strong>Способ доставки:</strong> " . ($data['customer']['deliveryMethod'] === 'delivery' ? 'Доставка' : 'Самовывоз') . "</p>";

if ($data['customer']['deliveryMethod'] === 'delivery' && !empty($data['customer']['deliveryAddress'])) {
    $message .= "<p><strong>Адрес доставки:</strong> " . htmlspecialchars($data['customer']['deliveryAddress']) . "</p>";
}

if (!empty($data['customer']['comment'])) {
    $message .= "<p><strong>Комментарий:</strong> " . htmlspecialchars($data['customer']['comment']) . "</p>";
}

$message .= "<h2>Товары:</h2><ul>";
foreach ($data['items'] as $item) {
    $message .= "<li>" . htmlspecialchars($item['name']) . " - " . $item['quantity'] . " × " . $item['price'] . " BYN</li>";
}
$message .= "</ul>";
$message .= "<p><strong>Итого:</strong> " . number_format($data['total'], 2) . " BYN</p>";
$message .= "</body></html>";

// Логируем заказ в файл (для отладки)
file_put_contents('orders.log', date('Y-m-d H:i:s') . " - " . json_encode($data) . "\n", FILE_APPEND);

// Отправляем email
$success = mail($to, $subject, $message, $headers);

if ($success) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка при отправке письма']);
}
?>