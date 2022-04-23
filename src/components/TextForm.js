import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");
    const handleUpClick = () => {
        console.log("upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case",'success')
    }
    const handleclearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text","success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

      }
    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)  //i am doing this so that user can able to change the text also even after submitting
    }

    // text = "updated one text" wrong way to update this text;
    return (
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-3' onClick={handleclearClick}>Clear Text</button>
             <button type="submit" onClick={speak} className="btn btn-warning mx-3 my-2">Speak</button>
        </div>
    )
}
