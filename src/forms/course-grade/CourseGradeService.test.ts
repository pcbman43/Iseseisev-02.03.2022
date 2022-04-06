import React from 'react';
import {render, screen} from '@testing-library/react';
import {CourseGradeService} from './CourseGradeService';

test('renders learn react link', () => {
  const {calculate} = CourseGradeService();

  // Add some tests (at least 2-3 tests per grade)

  // failed
  expect(calculate(24, 27, 25)).toBe('failed');
  expect(calculate(27, 14, 36)).toBe('failed');
  // satisfactory
  expect(calculate(30, 26, 27)).toBe('satisfactory');
  expect(calculate(27, 25, 28)).toBe('satisfactory');
  // good
  expect(calculate(56, 37, 31)).toBe('good');
  expect(calculate(27, 45, 46)).toBe('good');
  // very good
  expect(calculate(56, 27, 48)).toBe('very good');
  expect(calculate(52, 49, 29)).toBe('very good');
});
