// /3  => Fizz
// /5 => Buzz
// /3 /5 => FizzBuzz
// not /3 or /5 => input
// not a number => 'Não é um número'

const resultado = fizzBuzz(15)
// 1, 3, 5, 15, 'string', boolean
console.log(resultado);

function fizzBuzz(input) {
  if (typeof input != 'number')
    return 'Não é um número';
  if (input % 3 === 0) && (input % 5 === 0)
    return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';
  if (input % 5 ===0)
    return 'Buzz';

  return input;
}
