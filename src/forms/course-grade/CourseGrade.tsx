import React, {useState} from 'react';
import {useCourseGradeService} from './CourseGradeService';
import {CourseGradeResult} from './types';

export const CourseGrade: React.FC = () => {
  const {calculate} = useCourseGradeService();
  const [be, setBe] = useState<string>('');
  const [le, setLe] = useState<string>('');
  const [wp, setWp] = useState<string>('');
  const [result, setResult] = useState<CourseGradeResult>();
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setResult(calculate(+be, +le, +wp));
  };
  
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <p><strong>03</strong> | University Course Grade Calculations</p>
      <div className="row align-items-center">
        <div className="col col-4">
          <label className="Label">Blackboard Exercises</label>
          <input type="number" min={0} max={50} className="Input" value={be} onChange={e => setBe(e.target.value)} />
        </div>
        <div className="col col-4">
          <label className="Label">Laboratory Exercises</label>
          <input type="number" min={0} max={50} className="Input" value={le} onChange={e => setLe(e.target.value)} />
        </div>
        <div className="col col-4">
          <label className="Label">Written Part</label>
          <input type="number" min={0} max={50} className="Input" value={wp} onChange={e => setWp(e.target.value)} />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <button type="submit" className="Button">Calculate</button>
        </div>
        <div className="col">
          <div className="Poster">
            <strong>Grade:</strong> {result ?? '-'}
          </div>
        </div>
      </div>
    </form>
  );
};