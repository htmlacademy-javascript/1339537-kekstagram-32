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
const getPositiveInteger = (string) => {
  let number = '';

  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      number += String(parseInt(string[i], 10));
    }
  }

  return number.length > 0 ? number : NaN;
};

getPositiveInteger('2023 год'); // 2023
getPositiveInteger('ECMAScript 2022'); // 2022
getPositiveInteger('1 кефир, 0.5 батона'); // 105
getPositiveInteger('агент 007'); // 7
getPositiveInteger('а я томат'); // NaN

// Делу — время
/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
function convertToMinutes(time) {
  const [hour, minutes] = time.split(':');
  const minutesInOneHour = 60;

  return hour * minutesInOneHour + parseInt(minutes, 10);
}

function checkMeeting (dayStart, dayEnd, meetingStart, meetingDuration) {
  const dayStartInMinutes = convertToMinutes(dayStart);
  const dayEndInMinutes = convertToMinutes(dayEnd);
  const meetingStartInMinutes = convertToMinutes(meetingStart);

  return meetingStartInMinutes >= dayStartInMinutes && meetingStartInMinutes + meetingDuration <= dayEndInMinutes;
}

checkMeeting('08:00', '17:30', '14:00', 90); // true
checkMeeting('8:0', '10:0', '8:0', 120); // true
checkMeeting('08:00', '14:30', '14:00', 90); // false
checkMeeting('14:00', '17:30', '08:0', 90); // false
checkMeeting('8:00', '17:30', '08:00', 900); // false
