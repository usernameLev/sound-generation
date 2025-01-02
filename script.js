const sound = document.getElementById('sound');
let intervalId; // Переменная для хранения идентификатора таймера

document.getElementById('startButton').addEventListener('click', function () {
  // Блокируем кнопку "Начать бой!"
  this.disabled = true;

  // Функция для генерации случайного времени
  function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Генерация звука через случайные интервалы
  function playSound() {
    sound.play();
    const randomInterval = getRandomTime(1000, 5000); // от 1 до 5 секунд
    intervalId = setTimeout(playSound, randomInterval);
  }

  playSound(); // Запуск генерации звуков
});

document.getElementById('stopButton').addEventListener('click', function () {
  clearTimeout(intervalId); // Остановка генерации звуков
  
  // Разблокируем кнопку "Начать бой!"
  document.getElementById('startButton').disabled = false;
});
