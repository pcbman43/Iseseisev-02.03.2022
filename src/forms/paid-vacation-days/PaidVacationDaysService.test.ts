import React from 'react';
import {render, screen} from '@testing-library/react';
import {PaidVacationDaysService} from './PaidVacationDaysService';

test('renders learn react link', () => {
  const {calculate} = PaidVacationDaysService();

  expect(calculate(14, 0)).toBe(27);
  expect(calculate(27, 0)).toBe(22);
  expect(calculate(27, 2)).toBe(22);
  expect(calculate(25, 20)).toBe(24);
  expect(calculate(3, 28)).toBe(29);
  expect(calculate(15, 16)).toBe(29);
  expect(calculate(14, 14)).toBe(27);
  expect(calculate(37, 0)).toBe(22);
  expect(calculate(0, 14)).toBe(27);
  expect(calculate(47, 0)).toBe(24);
  expect(calculate(15, 53)).toBe(27);
});
