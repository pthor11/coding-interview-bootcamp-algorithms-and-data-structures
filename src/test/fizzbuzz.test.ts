import { fizzBuzz } from "../fizzBuzz";

test('fizzbuzz', () => {
    expect(fizzBuzz(20)).toBe(`12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz1617fizz19buzz`)
})