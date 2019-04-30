/**
 * Напишите функцию capitalize(input), возвращающую копию строки input,
 * в которой каждое слово начинается с заглавной буквы.
 *
 * "Слово" в данном контексте - последовательность юникод-символов из группы "letters".
 * В целях упрощения в тестовых кейсах будут использоваться только строки из латинских букв
 * и кириллицы. Слова с дефисами ("Что-то", "кто-либо" и т.д.) считаются одним словом.
 *
 * capitalize('А роза упала на лапу Азора') === 'А Роза Упала На Лапу Азора'
 * capitalize('Use the force, Luke') === 'Use The Force, Luke'
 *
 * @param  {string} input строка с произвольным предложением.
 * @return {string}
 */
function capitalize(input) 
{
    //input = prompt("enter abc");
    let b = '';

        for (let i = 0; i < input.length; i++) 
        {
            b += (input[i - 1] == ' ') ? input[i].toUpperCase() : input[i];
        }

        return b;
}
let result = capitalize('А роза упала на лапу Азора');
console.log(result);
