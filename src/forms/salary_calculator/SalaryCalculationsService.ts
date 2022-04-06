import {injectableHook} from '../../core/inject';

type SalaryCalculationsService = {
    calculate: (salary: number) => number | undefined;
};

export const SalaryCalculationsService = (): SalaryCalculationsService => {
    const calculate = (salary: number): number | undefined => {

        if (isNaN(salary)) return undefined;

        if (salary * 12 <= 12500) {
            salary = salary - 125
        }

        if (salary * 12 > 12500 && salary * 12 < 25000) {
            salary = salary - 350
        }

        if (salary * 12 >= 25000) {
            salary = salary - 750
        }

        return Math.round(salary * 100) / 100;
    };

    return {calculate};
};

export const useSalaryCalculationsService = injectableHook(SalaryCalculationsService);
