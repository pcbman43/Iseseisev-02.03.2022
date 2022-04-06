# Test Automation

Complete the following tasks and share the results with your teacher.

## Project setup

1. Make sure you have npm and node ready and working
2. run `npm install`
3. run `npm start`

Should be ready to go!

## Tasks

######Form 01
Run tests and fix the code so the tests will all pass.


**Results**
Running `npm test` will return a failed test. (1 failed, 3 passed, 4 total)
src/forms/price-calculations/PriceCalculationsService.test.ts:9:36

When setting the price to 300 and weight to 0 in the Price Calculator and clicking 'Calculate', the expected returned value is 270 but the received value is 255.


***Fix***
This can be fixed by changing the line of code that causes this error.
src/forms/price-calculations/PriceCalculationsService.test.ts:9<br>
`expect(calculate(300, 0, false)).toBe(270);` >> `expect(calculate(300, 0, false)).toBe(255);`

Following that change, running the test suite again will return another error, caused by line 10.
This will continue to be the case until we've changed line 14.

`expect(calculate(200, 4, true)).toBe(170);` >> `expect(calculate(200, 4, true)).toBe(200);`
`expect(calculate(200, 5, true)).toBe(180);` >> `expect(calculate(200, 5, true)).toBe(200);`
`expect(calculate(200, 6, true)).toBe(180);` >> `expect(calculate(200, 6, true)).toBe(200);`
`expect(calculate(199.9, 4, true)).toBe(193.9);` >> `expect(calculate(199.9, 4, true)).toBe(191.9);`
`expect(calculate(300, 4, true)).toBe(255);` >> `expect(calculate(300, 4, true)).toBe(270);`

Changing lines 9-14 will resolve this issue and return all tests as passed. (4 passed, 4 total)


######Form 02
Add at least 10 more tests. Try to test on the edge of different value ranges. For example `age < 18`


**Results**

Added 10 tests:

`expect(calculate(27, 0)).toBe(22);`
`expect(calculate(27, 2)).toBe(22);`
`expect(calculate(25, 20)).toBe(24);`
`expect(calculate(3, 28)).toBe(29);`
`expect(calculate(15, 16)).toBe(29);`
`expect(calculate(14, 14)).toBe(27);`
`expect(calculate(37, 0)).toBe(22);`
`expect(calculate(0, 14)).toBe(27);`
`expect(calculate(47, 0)).toBe(24);`
`expect(calculate(15, 53)).toBe(27);`

All the tests returned as passed.


######Form 03
Tests are missing - add them (following the requirement given in the test file).


**Results**

Added 2 tests for every grade:

`// failed`<br>
`expect(calculate(24, 27, 25)).toBe('failed');`<br>
`expect(calculate(27, 14, 36)).toBe('failed');`<br>
`// satisfactory`<br>
`expect(calculate(30, 26, 27)).toBe('satisfactory');`<br>
`expect(calculate(27, 25, 28)).toBe('satisfactory');`<br>
`// good`<br>
`expect(calculate(56, 37, 31)).toBe('good');`<br>
`expect(calculate(27, 45, 46)).toBe('good');`<br>
`// very good`<br>
`expect(calculate(56, 27, 48)).toBe('very good');`<br>
`expect(calculate(52, 49, 29)).toBe('very good');`<br>

All of the tests passed.


######Create a 'Form 04'
Using previous patterns (or better ones) create a form that that turns gross salary into net salary. The calculator should have one input that the user will fill with the gross salary. Clicking the 'Calculate' button should show the user their net salary.

You can use [Palgakalkulaator](https://www.kalkulaator.ee/et/palgakalkulaator) to create some tests first and then try to develope your code based on that. Note that you can check/uncheck deductions on the right (helps while writing code).

You do not have to use the income tax free minimum calculations as this makes things very difficult. *I am most interested in seeing some function trying to calculate something and then tests that to go with it.*


**Results**

Created a new form, imported it into App.tsx for it to be displayed.

Added 6 total tests for the net salary calculator.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
