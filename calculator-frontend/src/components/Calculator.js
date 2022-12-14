import React, {useState} from 'react';
import { CalculatorHistory } from './CalculatorHistory';
import { CalculatorMain } from './CalculatorMain';

export const Calculator = ()  => {

    const [expandible, setExpandible] = React.useState(true);
    const [history, setHistory] = useState([]);

    const addHistObject = (histObject) => {
        setHistory(history => [histObject, ...history]);
    };


    return (

        <div className='row h-80'>
            <div className='col-4 mr-0 pr-0'>
                <CalculatorHistory history={history} />

            </div>
            <div className='col-8 ml-0 pl-0'>
                <CalculatorMain addHistObject={addHistObject} />

            </div>

        </div>
    );







    
    

};
