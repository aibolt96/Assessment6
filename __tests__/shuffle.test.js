const shuffle = require("../src/shuffle");

const testArray = [50, 77, 512, 99, 4]

describe("tests for shuffle", () => {
  test('returns an array of the same length' , () => {
    expect(shuffle(testArray).length).toBe(testArray.length)
  })

  test('items in array have been shuffled' , () => {
    const shuffledArray = shuffle(testArray)
    expect(shuffledArray).not.toBe(testArray)
  })
});
