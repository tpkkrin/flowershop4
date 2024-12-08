// Скрипт для управления прелоадером
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader'); // Ищем прелоадер по ID
  if (preloader) {
    console.log('Прелоадер найден, начинаем скрытие'); // Лог для диагностики

    // Добавляем класс для анимации скрытия
    preloader.classList.add('hidden');

    // Ждем окончания анимации, затем убираем элемент из DOM
    setTimeout(() => {
      preloader.style.display = 'none'; // Полное скрытие
      console.log('Прелоадер успешно скрыт'); // Уведомление для проверки работы
    }, 500); // Переход длится 500 мс (соответствует CSS-транзиции)
  } else {
    console.warn('Прелоадер не найден в DOM'); // Сообщение, если элемент отсутствует
  }
});

// Скрипт для обработки отправки формы
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращение отправки формы

  // Показать сообщение об успешной отправке
  const successMessage = document.getElementById('successMessage');

  // Устанавливаем временные стили для теста
  successMessage.style.position = 'fixed';
  successMessage.style.top = '50%';
  successMessage.style.left = '50%';
  successMessage.style.transform = 'translate(-50%, -50%)';
  successMessage.style.backgroundColor = 'green';
  successMessage.style.color = 'white';
  successMessage.style.padding = '20px';
  successMessage.style.borderRadius = '10px';
  successMessage.style.zIndex = '1000';
  successMessage.style.display = 'block';

  // Удаляем класс hidden, если он есть
  successMessage.classList.remove('hidden');

  // Скрыть сообщение через 3 секунды
  setTimeout(() => {
    successMessage.style.display = 'none'; // Прячем сообщение
    successMessage.classList.add('hidden'); // Возвращаем класс hidden
  }, 3000);

  // Сброс формы
  this.reset();
});
