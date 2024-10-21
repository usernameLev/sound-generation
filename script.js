document.getElementById('startButton').addEventListener('click', function() {
  const sound = document.getElementById('sound');
  
  // Функция для генерации случайного времени
  function getRandomTime(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Генерация звука через случайные интервалы
  function playSound() {
      sound.play();
      const randomInterval = getRandomTime(1000, 5000); // от 1 до 5 секунд
      setTimeout(playSound, randomInterval);
  }

  playSound(); // Запуск генерации звуков
});
