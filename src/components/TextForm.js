import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Defautl Text');
    // setText("Canged to Braj");
    const handleUpChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
      };

    const handleOnChange = (events) => {
        setText(events.target.value)
    }
  return (
    <>
        <div className='container'>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpChange} >Convert To UpperCase</button>
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').length} words , {text.length} characters</p>
        </div>
    </>
  )
}
