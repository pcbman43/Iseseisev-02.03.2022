import React, {useState} from 'react';
import {usePaidVacationDaysService} from './PaidVacationDaysService';

export const PaidVacationDays: React.FC = () => {
  const {calculate} = usePaidVacationDaysService();
  const [age, setAge] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [result, setResult] = useState<number>();
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setResult(calculate(+age, +service));
  };
  
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <p><strong>02</strong> | Paid Vacation Days Calculation</p>
      <div className="row align-items-center">
        <div className="col col-6">
          <label className="Label">Age</label>
          <input type="number" min={0} max={120} className="Input" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div className="col col-6">
          <label className="Label">Years of service</label>
          <input type="number" min={0} max={120} className="Input" value={service} onChange={e => setService(e.target.value)} />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <button type="submit" className="Button">Calculate</button>
        </div>
        <div className="col">
          <div className="Poster">
            <strong>Days:</strong> {result ?? '-'}
          </div>
        </div>
      </div>
    </form>
  );
};