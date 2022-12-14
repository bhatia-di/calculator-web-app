import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faPlus, faTag, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';



export const CalculatorHistory = (HistoryProps)  => {


    



    console.log(HistoryProps.history);
    
    if (HistoryProps.history.length > 0) {
        return (

            <div className='container overflowy height-80 p-2'>
                <div className='row p-2 m-2'>
                    <div className='col-12'>
    
                        <span className="display-6 float-left border-bottom-theme-pink color-pink mt-2">History</span>

                    </div>
                </div>

                <div className='row'>

                        <div className='col-12'>

                                {
                                    HistoryProps.history.map((history, index) => {

                                        return (<div className='card m-3 w-100 p-2 border-theme-right-pink-thin '>
                                        <small className='color-pink float-left text-left'><FontAwesomeIcon icon={faClock} />&nbsp; {history.timestamp}</small>
                                        <br />

                                        <p className='color-pink text-left'>{history.inputString} =  <span className='color-pink  display-5 f-650'>{history.result}</span></p>
                                       

                                    </div>)
                                    })
                                }
                        </div>

                    </div>
            </div>
            
        );

    }
    else {
        return (

            <div className='container height-80'>

                <div className='row p-2 m-2'>
                    <div className='col-12'>

                        <div className='row'>

                            <span className="display-6 float-left border-bottom-theme-pink color-pink mt-2">History</span>

                            <br />

                        </div>
                        <div className='row'>

                        <span className="display-6 float-left color-pink mt-2"><FontAwesomeIcon icon={faExclamationTriangle} /> &nbsp; No History found</span>


                        </div>


                    </div>
                </div>

            </div>

            
        );
    }
    







    
    

};
