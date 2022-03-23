/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  let sum = 0;
  for (let i = start + (start % 2); i <= end; i += 2) {
      sum += i;
  }
  return sum;
}

/*
В функцию iterationCount() приходит неотрицательное число.
Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  let cnt = 0;
  while (a > 0.1) {
      a /= 2;
      cnt++;
  }
  return cnt;
}

/*
В функцию symbolsReplace() приходит строка текста.
Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
и верните итоговый результат.
*/
export function symbolsReplace(message) {
  let msgSize = message.length;

  if (msgSize > 0) {
      let str = '';
      let i = 0;
      do {
          if ((i + 1) % 3 === 0) {
              str += '_';
          } else {
              str += message[i];
          }
          i++;
      } while (i < msgSize);
      return str;
  }
}
