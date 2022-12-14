import React, {useState} from 'react';
import { CalculatorHistory } from './CalculatorHistory';
import { CalculatorMain } from './CalculatorMain';

export const Calculator = ()  => {

    const [expandible, setExpandible] = React.useState(true);


    return (

        <div className='row h-80'>
            <div className='col-4 mr-0 pr-0'>
                <CalculatorHistory />

            </div>
            <div className='col-8 ml-0 pl-0'>
                <CalculatorMain />

            </div>

        </div>
    );







    
    

};
