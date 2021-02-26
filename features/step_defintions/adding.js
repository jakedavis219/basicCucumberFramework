  const prompt = require('prompt-sync')();
  const { Given, When, Then } = require('@cucumber/cucumber')
  var assert = require('chai').assert

  Given('the input {string}', function (string) {  
    input = Number(prompt("Enter the first number:"))
    input1 = Number(prompt("Enter the second number:"))

    return input, input1
  });

  When('the calculator is run', function () {
    sum = input + input1
    return sum
  });

  Then('the output should {string}', function (string) {
    assert.equal(sum, 4)
  });
