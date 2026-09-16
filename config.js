window.BOOKED_CONFIG = {
  // Если backend размещён на сервере, вставь сюда его HTTPS-адрес без слеша в конце.
  // Пример: "https://booked-backend.onrender.com"
  backendUrl: "",

  telegramBotUrl: "https://t.me/BOOKED_leads_bot",
  telegramChannelUrl: "https://t.me/booked_ru",

  // Вставь сюда реальные платёжные ссылки из ЮKassa / CloudPayments / Robokassa.
  // Пока ссылки пустые, кнопки оплаты будут вести клиента в Telegram-бота.
  paymentLinks: {
    audit: "",
    setup: ""
  }
};
