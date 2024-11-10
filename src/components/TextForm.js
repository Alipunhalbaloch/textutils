import React , {useState} from 'react'
//import PropTypes from 'prop-types';
export default function TextForm(props) {


const handleUpclick = ()=>{
    // console.log("uper cash was cliked:" +text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success");
  }

  
const handleLowclick = ()=>{
  // console.log("uper cash was cliked:" +text);
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("converted to Lowercase","success");

}
    
const handleOnchange = (event)=>{
    // console.log("onchange");
    setText(event.target.value);
  }
  const handleCopy = (event)=>{

    let text =document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("text copied!","success");

  }


  const handleRemove = ()=>{
    // console.log("onchange");
    setText("");
    props.showAlert("text removed!","success");

  }

    
  const handleSpaceRemove = ()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Erased succesfully","success");

  }

    const [text, setText] = useState("");
     
     
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading} </h1>
        <div className="mb-3">
      
        <textarea className="form-control" value={text}  onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark' ?'#13466e':'white', color: props.mode === 'dark' ?'white':'black'}} id="mybox" rows="3">
        </textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary x-2 my-2" onClick={handleUpclick}>convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowclick}>convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemove}>remove text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaceRemove}>remove extra spaces </button>


      
  </div>
<div className="container my-3" style={{color: props.mode === 'dark' ?'white':'#042743'}}>
  <h1>your text here </h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minuts read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text: "Nothing to preview"}</p>
</div>
</>
  )
}
