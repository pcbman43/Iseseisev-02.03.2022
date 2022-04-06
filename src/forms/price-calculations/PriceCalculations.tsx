import React, {useState} from 'react';
import {usePriceCalculationService} from './PriceCalculationsService';

export const PriceCalculations: React.FC = () => {
  const {calculate} = usePriceCalculationService();
  const [price, setPrice] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [creditCard, setCreditCard] = useState<boolean>(false);
  const [result, setResult] = useState<number>();
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setResult(calculate(+price, +weight, creditCard));
  };
  
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <p><strong>01</strong> | Price calculation</p>
      <div className="row align-items-center">
        <div className="col col-4">
          <label className="Label">Price</label>
          <input type="number" className="Input" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div className="col col-4">
          <label className="Label">Weight</label>
          <input type="number" className="Input" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div className="col col-4">
          <label className="Label">
            Pay with credit card
            <input type="checkbox" checked={creditCard} onChange={() => setCreditCard(prev => !prev)} />
          </label>                          
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <button type="submit" className="Button">Calculate</button>
        </div>
        <div className="col">
          <div className="Poster">
            <strong>Total price:</strong> {result ?? '-'}
          </div>
        </div>
      </div>
    </form>
  );
};