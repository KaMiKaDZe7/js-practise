/**
 * Напишите функцию limitCalls(fn, maxCalls), принимающую функцию fn,
 * и возвращающую новую функцию, которую можно вызвать не более
 * указанного в maxCalls количества раз.
 *
 * В целях упрощени, входящая функция не принимает никаких аргументов, работу с
 * аргументами можно не учитывать.
 *
 * Пример:
 * const limitedLog = limitCalls(() => console.log('log'), 2);
 * limitedLog(); // 'log'
 * limitedLog(); // 'log'
 * limitedLog(); // undefined
 * limitedLog(); // undefined
 *
 *
 * @param  {Function} fn функция
 * @param  {number} maxCalls максимальное количество вызовов
 * @return {Function}
 */
function Func(hello) {
    hello = prompt("enter abc.."); // cin >> hello (с коментом)
    console.log("what's up" + hello); //вывод в консоль браузера
}

function limitCalls(fn, maxCalls) {
    var i;

    for (i = 0; i < Max; i++) {
        fn();//вызов функции
    }

}
const maxCalls = 3;
limitCalls(Func, maxCalls);

const limitedLog = limitCalls(() => console.log('log'), 2);
limitedLog();
limitedLog();
