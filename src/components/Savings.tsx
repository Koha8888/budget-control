import React, { useState } from 'react';
import { SavingsProps } from '../types/Savings';

const Savings = ({savings}:SavingsProps) => {
    const [target, setTarget] = useState (0)
    return (
        <div>
            <p>Current Savings: {savings}</p>
            <p>Current Target:{target}</p>
            <progress value={savings} max={target}/>
            <form>
                <label htmlFor="">Set target</label>
                <input type="number" name="target" id="target" onChange={(e)=>setTarget(Number(e.target.value))}/>
                <button type="submit">Set target</button>
            </form>
        </div>
    )
};


export default Savings;
