// №1 Функции для тренировки - проверка длины строки
const checkStringLength = (string, numMaxLength) => string.length <= numMaxLength;

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false


// №2 Функции для тренировки - Строка является палиндромом
const isPalindrome = (string) => {
  const cleaned = string.toUpperCase().replaceAll(' ', '');
  const reversed = [...cleaned].reverse().join('');

  return cleaned === reversed;
};

isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false

// №3 Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:
const positiveInteger = (string) => {
  let number = '';

  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      number += String(parseInt(string[i], 10));
    }
  }

  if (number.length > 0) {
    return number;
  } else {
    return NaN;
  }
};

positiveInteger('2023 год'); // 2023
positiveInteger('ECMAScript 2022'); // 2022
positiveInteger('1 кефир, 0.5 батона'); // 105
positiveInteger('агент 007'); // 7
positiveInteger('а я томат'); // NaN
