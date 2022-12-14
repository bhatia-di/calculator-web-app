import React from 'react';
import { CalculatorScreen } from './CalculatorScreen';

export const CalculatorMain = ()  => {


    return (

        <div className='row height-80'>
            <div className='col-12'>

                {/* <div className='border-theme-pink' style={{borderLeft: "0px"}}> */}
                <div className='module'>
                    <span className="display-6 color-pink mt-2">Calculator Main</span>

                    <CalculatorScreen />

                    <div className='row'>
                        <div className='col-2'>
                            <button className="btn color-white">x!</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">(</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">)</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">%</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">CE</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>



                    <div className='row'>
                        <div className='col-2'>
                            <button className="btn color-white">ln</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">7</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">8</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">9</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">/</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">CE</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-2'>
                            <button className="btn color-white">log</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">4</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">5</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">6</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">*</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>



                    <div className='row'>
                        <div className='col-2'>
                            <button className="btn color-white">√</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">1</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">2</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">3</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">-</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>



                    <div className='row'>
                        <div className='col-2'>
                            <button className="btn"> </button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">0</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-pink hover-white">.</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">=</button>
                        </div>
                        <div className='col-2'>
                            <button className="btn color-white">+</button>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>


                </div>
                

            </div>
        </div>
    );







    
    

};
