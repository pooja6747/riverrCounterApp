import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, reset } from '../redux/Redux/Action/index';

export const Counter = () => {

    const myState = useSelector((state) => state.changeNumber);

    const dispatch = useDispatch();

    const [title, setTitle] = useState("Tally Counter")
    const [input, setInput] = useState("")
    const [hide, setHide]=useState(false)

    const handleDecrement = () => {
        console.log("dec", myState)
        dispatch(decNumber())
    }

    const handleIncrement = () => {
        dispatch(incNumber())
    }

    const handleReset = () => {
        dispatch(reset())
    }

    const handleName = (e) => {
        setTitle(input)
        setHide(true)
    }

    const inputHandle = (e) => {
        setInput(e.target.value)
    }
    return (
        <>

            <div className='container'>

                <h1 className='text-center my-2'>{title}</h1>
                <h4 className='text-center'> Using react and redux</h4>

                <div className='quantity'>


                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <input name='quantity' type='text' className='form-control' value={myState} />
                            <div className="btn-block text-center">
                                <button className='btn btn-primary btn-lg mx-2 my-2' title='Increment' onClick={handleIncrement} ><span>+</span></button>
                                <button className='btn btn-danger btn-lg mx-2 my-2' title='Decrement' onClick={handleDecrement} ><span>-</span></button>
                            </div>

                            <div className="reset text-center my-2 mx-2">
                                <button className='btn btn-secondary' onClick={handleReset}>Reset</button>
                            </div>

                            <div className="counter-name text-center">{
                                hide ? ( <input className='form' value={input} onChange={inputHandle} />):null
                            }
                               
                                <button className='btn btn-secondary p-2' onClick={handleName}>SET</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
