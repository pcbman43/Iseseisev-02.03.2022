import React from 'react';
import {render, screen} from '@testing-library/react';
import {PriceCalculationService} from './PriceCalculationsService';

test('renders learn react link', () => {
  const {calculate} = PriceCalculationService();

  expect(calculate(50, 0, false)).toBe(50);
  expect(calculate(300, 0, false)).toBe(255);
  expect(calculate(200, 4, true)).toBe(200);
  expect(calculate(200, 5, true)).toBe(200);
  expect(calculate(200, 6, true)).toBe(200);
  expect(calculate(199.9, 4, true)).toBe(191.9);
  expect(calculate(300, 4, true)).toBe(270);
  expect(calculate(0, 6, false)).toBe(6);
  expect(calculate(0, 4.9, false)).toBe(0);
  expect(calculate(100.1, 6, false)).toBe(100.1);
});
