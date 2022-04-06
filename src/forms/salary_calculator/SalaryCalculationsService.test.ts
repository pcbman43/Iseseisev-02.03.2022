import React from 'react';
import {render, screen} from '@testing-library/react';
import {SalaryCalculationsService} from './SalaryCalculationsService';

test('renders learn react link', () => {
  const {calculate} = SalaryCalculationsService();

  // Example tests should look something like this - expect(calculate(5000)).toBe(4250);

  // <= 12500 (-125)
  expect(calculate(500)).toBe(375); // 500 * 12 = 6000
  expect(calculate(600)).toBe(475); // 600 * 2 = 7200

  // > 12500 && < 25000 (-350)
  expect(calculate(1500)).toBe(1150); // 1500 * 12 = 18000
  expect(calculate(2000)).toBe(1650); // 2000 * 12 = 24000

  // >= 25000 (-650)
  expect(calculate(2100)).toBe(1350); // 2100 * 12 = 25200
  expect(calculate(2500)).toBe(1750); // 2500 * 12 = 30000

});
