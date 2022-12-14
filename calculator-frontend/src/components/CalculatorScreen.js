import React, {useState, useEffect} from 'react';
import { Tooltip } from 'reactstrap';
import { validateInput } from '../utils/utils';
import { Alert } from './Alert';


export const CalculatorScreen = (ScreenProps) => {
    



    useEffect(() => {
        var res = validateInput(ScreenProps.displayValue);

        if (typeof res === "number") {
            ScreenProps.setInputError(false);
            ScreenProps.setInputErrorMessage("");
            console.log(res);
            console.log(typeof res);
        }
        if (typeof res === "string" && res.startsWith("Invalid")) {
            ScreenProps.setInputError(true);
            ScreenProps.setInputErrorMessage(res);
        } 

    }, [ScreenProps.displayValue]);

   
    const onChangeInput = (event) => {

        ScreenProps.setDisplayValue(event.target.value);

    }



    return (
        <div className="m-2 p-2 border-bottom-theme-pink">

            <div className='row'>
                <div className='col-12'>
                    {
                        (typeof ScreenProps.result === "number")
                            ? <div className='card m-3 p-2 border-theme-right-pink-thin'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <span className='color-pink float-left'>{ScreenProps.displayValue} =</span>
                                    </div>
                                    

                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <span className='display-2 color-pink float-right f-600'>{ScreenProps.result}</span>                                        
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
                    <input type="text" className="form-control border-theme-pink-thin" value={ScreenProps.displayValue}
                            onChange={onChangeInput}
                            onKeyDown={ScreenProps.onKeyDown}
                            aria-label="screen display" aria-describedby="screen-display" />
                    <div className="input-group-append">
                        <button className='btn color-pink hover-white border-theme-pink-thin' id={"calcDisplay"} type="button">?</button>
                    </div>
                </div>
                <Alert message={ScreenProps.inputErrorMessage} visible={ScreenProps.inputError} />


                {/* <Tooltip placement={"bottom-end"} isOpen={tooltipOpen} 
                                target={"calcDisplay"} toggle={toggle}>
                                Tooltip Content!
                </Tooltip> */}
                
                </div>
            </div>

            

            

            

        </div>
    );

};
