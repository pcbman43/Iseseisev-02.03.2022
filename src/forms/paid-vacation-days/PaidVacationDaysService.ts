import {injectableHook} from '../../core/inject';

type PaidVacationDaysServiceData = {
  calculate: (age: number, service: number) => number | undefined;
};

export const PaidVacationDaysService = (): PaidVacationDaysServiceData => {
  const calculate = (age: number, service: number): number | undefined => {
    if (isNaN(age) || isNaN(service)) return undefined;
    
    let days = 22;
    
    if ((age >= 45 && age < 60) || (service >= 15 && service < 30)) {
      days = days + 2;
    }
    
    if (age < 18 || age >= 60 || service >= 30) {
      days = days + 5;
    }
    
    if (age >= 60 && service >= 30) {
      days = days + 3;
    }
    
    return days;
  };
  
  return {calculate};
};

export const usePaidVacationDaysService = injectableHook(PaidVacationDaysService);