'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named getNames that, given an array of people objects, 
uses map to return an array of names reversed.

For example: 
[
{
  name: 'lloyd',
  age: 32,
  shoeSize: 12
}, 
{
  name: 'jamie',
  age: 21,
  shoeSize: 8
}
]

Returns: ['dyoll', 'eimaj'];
1. loop over each object and retrieve it's name
2. reverse name
3. return name reversed
4. return new array
------------------------------------------------------------------------------------------------ */

const getNames = (arr) => {
  // Solution code here...
  let reversedArray = arr.map(item => {
    return item.name.split('').reverse().join('')
  })
  return reversedArray
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named count that, given an integer and an array of arrays, 
uses either filter, map, or reduce to 
count the amount of times the integer is present 
in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
1 ) loop over parent array
2 ) loop over childs arrays 1 by 1.
3. check how many times target appeared.
4. add 1 to accom.
5. add result to accomulator.
6. return result
------------------------------------------------------------------------------------------------ */

const count = (target, input) => {
  // Solution code here...
  let count = input.reduce((accomulator, numbers) => {
    let total = numbers.reduce((acc, item) => {
      if (item === target) {
        acc = acc + 1;
        return acc;
      }
      return acc;
    }, 0)
    accomulator = accomulator + total
    return accomulator
  }, 0)
  return count;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that, given an array of integer arrays as input, 
calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem,
 but are not required to.
You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  // Solution code here...
  let totalSum = input.reduce((accomulator, arr) => {
    arr.forEach(element => {
      accomulator = accomulator + element;
    });
    return accomulator
  }, 0)
  return totalSum;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that 
  not numbers
  not divisible by five.
  should then raise 2 to the power of the resulting numbers

This function should then raise 2 to the power of the resulting numbers,
 returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  // Solution code here...
  let returnArray = input.map(arr => {
    let result = [];
    arr.forEach(item => {
      if (item % 5 === 0 && typeof item === "number") result.push(Math.pow(2, item))
    })
    return result
  })
  return returnArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
  // Solution code here...
  let string = ''
  data.forEach(element => {
    if (element.gender === 'female' || element.gender === 'male') {
      string = string + element.name + ' and ';
    }
  });
  return string.slice(0, string.length - 5);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 

Write a function named findShortest take, 
given the Star Wars data from Challenge 6, 
uses any combination of filter, map and reduce
return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  // Solution code here...
  /*
  1. assume first item name is the shortest.
  2. compare it's length with each item in array.
  3. if item name length is shorter that my short name then replace.
  4. return shortest in my variable.
  5. no need to chain array methods
  */
  let initName = data[0].name;
  data.forEach(item => {
    if (item.name.length <= initName.length) {
      initName = item.name;
    }
  })
  return initName;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It returns an array of names reversed', () => {
    expect(getNames([{ name: 'lloyd', age: 32, shoeSize: 12 }, { name: 'jamie', age: 21, shoeSize: 8 }])).toStrictEqual(['dyoll', 'eimaj']);
    expect(getNames([])).toStrictEqual([]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 3', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 4', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 5', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 6', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
