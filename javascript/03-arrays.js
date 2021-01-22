const ArrTest = [ 1.2, 3, 4, 12]

// console.log(ArrTest[1])

ArrTest[10] = 35;

console.log ( ArrTest )

ArrTest.push({ id: 22}, false, null, 'String')


console.log ( ArrTest )

console.log ( 'Pop ', ArrTest.pop() )

console.log ( ArrTest )

delete ArrTest[0]

console.log ( ArrTest )

