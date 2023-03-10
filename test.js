// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 Yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    const expected = (5 / 1.2) * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(5)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One thousand yen should be 6.25 pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    const expected = (1000 / 127.9) * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
