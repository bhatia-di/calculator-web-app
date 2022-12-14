import React, {useState, useEffect} from 'react';
import { Tooltip } from 'reactstrap';
import { validateInput } from '../utils/utils';
import { Alert } from './Alert';


export const CalculatorScreen = () => {
    
    const [displayValue, setDisplayValue] = useState("");
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [inputErrorMessage, setInputErrorMessage] = useState(false);
    const [result, setResult] = useState("");


    useEffect(() => {
        var res = validateInput(displayValue);

        if (typeof res === "number") {
            setInputError(false);
            setInputErrorMessage("");
            console.log(res);
            console.log(typeof res);
            setResult(res);
        }
        if (typeof res === "string" && res.startsWith("Invalid")) {
            setInputError(true);
            setInputErrorMessage(res);
        } 

    }, [displayValue]);

    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    }
    const onChangeInput = (event) => {

        setDisplayValue(event.target.value);

    }



    return (
        <div className="m-2 p-2 border-bottom-theme-pink">

            <div className='row'>
                <div className='col-12'>
                    {
                        (typeof result === "number")
                            ? <div className='card m-3 border-theme-right-pink-thin'>
                                <div className='row'>
                                    <div className='col-2 p-2'>
                                        <span className='color-pink'>{displayValue} =</span>
                                    </div>
                                    <div className='col-10'>
                                        <span className='display-2 color-pink float-right f-600'>{result}</span>
                                        
                                    </div>

                                </div>
                            </div>
                            : null
                    }
                </div>
            </div>
            

            <div className='row w-100'>
                <div className='col-12'>



                <div className="input-group mb-3">
                    <input type="text" className="form-control border-theme-pink-thin" value={displayValue}
                            onChange={onChangeInput}
                            aria-label="screen display" aria-describedby="screen-display" />
                    <div className="input-group-append">
                        <button className='btn color-pink hover-white border-theme-pink-thin' id={"calcDisplay"} type="button">?</button>
                    </div>
                </div>
                <Alert message={inputErrorMessage} visible={inputError} />


                {/* <Tooltip placement={"bottom-end"} isOpen={tooltipOpen} 
                                target={"calcDisplay"} toggle={toggle}>
                                Tooltip Content!
                </Tooltip> */}
                
                </div>
            </div>

            

            

            

        </div>
    );

};
