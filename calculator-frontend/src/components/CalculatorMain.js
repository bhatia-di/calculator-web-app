import React, {useState} from 'react';
import { CalculatorScreen } from './CalculatorScreen';

export const CalculatorMain = (CalculatorMainProps)  => {

    const [displayValue, setDisplayValue] = useState("");
    const [inputError, setInputError] = useState(false);
    const [inputErrorMessage, setInputErrorMessage] = useState(false);
    const [result, setResult] = useState("");



    const onKeyDown = (event) => {
        console.log(event.key);


        if (event.key === "Enter" || event.key === "=") {

            computeResult();
            event.preventDefault();
        }
        


    }
    const appendDisplayValue = (value) => {
        console.log(displayValue + value);
        setDisplayValue(displayValue + value);
            
    }

    const computeResult = () => {
        const res = eval(displayValue);
        setResult(Math.round((res + Number.EPSILON) * 100) / 100);
        const histObject = {

            timestamp: new Date().toISOString(),
            inputString: displayValue,
            result: res

        }

        CalculatorMainProps.addHistObject(histObject);

    }

    return (

        <div className='row height-80'>
            <div className='col-12'>

                {/* <div className='border-theme-pink' style={{borderLeft: "0px"}}> */}
                <div className='module'>

                    <CalculatorScreen 
                                displayValue={displayValue}
                                result={result}
                                inputError={inputError} inputErrorMessage={inputErrorMessage}
                                setDisplayValue={setDisplayValue}
                                setInputError ={setInputError}
                                setInputErrorMessage={setInputErrorMessage}
                                setResult={setResult}
                                onKeyDown={onKeyDown}
                                />

                    <div className='row'>
                        {/* <div className='col-2'>
                            <button className="btn color-white">x!</button>
                        </div> */}
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("(")} className="btn color-white">(</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue(")")} className="btn color-white">)</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("%")} className="btn color-white">%</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">CE</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>



                    <div className='row'>
                        {/* <div className='col-2'>
                            <button className="btn color-white">ln</button>
                        </div> */}
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("7")}  className="btn color-pink hover-white">7</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("8")} className="btn color-pink hover-white">8</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("9")} className="btn color-pink hover-white">9</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("/")} className="btn color-white">/</button>
                        </div>
                        {/* <div className='col-2'>
                            <button className="btn color-white">CE</button>
                        </div> */}
                        <div className='col-2'>
                        </div>
                    </div>


                    <div className='row'>
                        {/* <div className='col-2'>
                            <button className="btn color-white">log</button>
                        </div> */}
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("4")} className="btn color-pink hover-white">4</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("5")} className="btn color-pink hover-white">5</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("6")} className="btn color-pink hover-white">6</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("*")} className="btn color-white">*</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>



                    <div className='row'>
                        {/* <div className='col-2'>
                            <button className="btn color-white">???</button>
                        </div> */}
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("1")} className="btn color-pink hover-white">1</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("2")} className="btn color-pink hover-white">2</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("3")} className="btn color-pink hover-white">3</button>
                        </div>
                        <div className='col-2'>
                            <button  onClick={() => appendDisplayValue("-")} className="btn color-white">-</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>



                    <div className='row'>
                        <div className='col-2'>
                            <button className="btn"> </button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("0")} className="btn color-pink hover-white">0</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue(".")} className="btn color-pink hover-white">.</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => computeResult()} className="btn color-white">=</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={() => appendDisplayValue("+")} className="btn color-white">+</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>


                </div>
                

            </div>
        </div>
    );







    
    

};
