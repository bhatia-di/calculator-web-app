import React, {useState} from 'react';
import { Button, Tooltip } from 'reactstrap';


export const CalculatorScreen = () => {



    const [displayValue, setDisplayValue] = useState("");
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    }
    const onChangeInput = () => {

    }

    return (
        <div className="h-20 m-2 p-2 border-bottom-theme-pink d-flex">
            <span className="display-6 color-pink mt-2">5</span>

            <div className='row shiftToBottonEnd w-100'>
                <div className='col-12'>



                <div className="input-group mb-3">
                    <input type="text" className="form-control border-theme-pink" aria-label="screen display" aria-describedby="screen-display" />
                    <div className="input-group-append">
                        <button className='btn color-pink hover-white border-theme-pink' id={"calcDisplay"} type="button">?</button>
                    </div>
                </div>

                <Tooltip placement={"bottom-end"} isOpen={tooltipOpen} 
                                target={"calcDisplay"} toggle={toggle}>
                                Tooltip Content!
                </Tooltip>
                
                </div>
            </div>

            

        </div>
    );

};
