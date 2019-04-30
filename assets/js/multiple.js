/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

function multiple(a, b) {
    var res = 0;

    if (b < 0) a = -a;

    for (let i = 0; i < Math.abs(b); i++) {
        res = res + a;
    }
    //console.log(res);
}

multiple(-2, 5); 