import {injectableHook} from '../../core/inject';
import {CourseGradeResult} from './types';

type CourseGradeServiceData = {
  calculate: (be: number, le: number, wp: number) => CourseGradeResult | undefined;
};

export const CourseGradeService = (): CourseGradeServiceData => {
  const calculate = (be: number, le: number, wp: number): CourseGradeResult | undefined => {
    if (isNaN(be) || isNaN(le) || isNaN(wp)) return undefined;
    
    const sum = be + le + wp;
    
    if ([be, le, wp].some(points => points < 25) || sum < 76) {
      return 'failed';
    }
    
    if (sum >= 76 && sum <= 100) {
      return 'satisfactory';
    }
    
    if (sum >= 101 && sum <= 125) {
      return 'good';
    }
    
    if (sum > 125) {
      return 'very good';
    }
    
    return undefined;
  };
  
  return {calculate};
};

export const useCourseGradeService = injectableHook(CourseGradeService);