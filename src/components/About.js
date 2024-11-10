 import React from 'react';

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({

    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setBtnText] = useState("Enable dark mode")

    let myStyle ={
            color: props.mode ==='dark'?'white':'#042743',
            backgroundColor:  props.mode ==='dark'?'#042743':'white'
    }
  return (
    <div className='container' style={myStyle}>
            <h1>About us</h1>
                    <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>its part 1</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby='headingthree' data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    this is part 2 content to test the colors of part                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>its part 2</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby='headingthree' data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                                this is part 2 content to test the colors of part
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>its part 3</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby='headingthree' data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle} >
                    this is part 2 content to test the colors of part                
                        </div>
                    </div>
                </div>
                </div>
                
    </div>
  )
}
