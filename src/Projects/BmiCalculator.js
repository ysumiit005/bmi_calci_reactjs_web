import React, { useState } from 'react'

const BmiCalculator = () => {

    const [weight, setweight] = useState()
    const [height, setheight] = useState()
    const [bmi, setbmi] = useState('')
    const [msg, setmsg] = useState('')

    let calcBmi = (e) => {
        e.preventDefault()


        if (weight === 0 || height === 0) {
            setmsg("Please enter a valid number")
        } else {
            let formula = (weight / (height * height) * 703)
            setbmi(formula.toFixed(1))

            if (formula < 25) {
                setmsg('You are underweight')
            } else if (formula >= 25 && formula < 30) {
                setmsg('You are healthy weight')
            } else {
                setmsg('You are overweight')
            }
        }

    }

    let reload = () => {
        window.location.reload()
    }

    return (
        <>
            <div className='app'>
                <div className='container'>
                    <h2 className='center'>React Js - BMI Calculator</h2>

                    <form onSubmit={calcBmi}>

                        <div>
                            <label>Enter Weight (lbs)</label>
                            <input className='bmi-input' type="number" placeholder='1' value={weight} onChange={(e) => setweight(e.target.value)} />
                        </div>

                        <div>
                            <label>Enter Height (in)</label>
                            <input className='bmi-input' type="number" placeholder='1' value={height} onChange={(e) => setheight(e.target.value)} />
                        </div>

                        <div>
                            <button className='btn' type='submit'>Submit</button>
                            <button className='btn btn-reload' type='submit' onClick={reload}>Reload</button>
                        </div>
                    </form>

                    <div>
                        <h3>Your bmi is: {bmi}</h3>
                        <p className='p-msg'>{msg}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BmiCalculator