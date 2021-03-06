import React, { useState } from 'react'

export default function About(props) {

  // const [mystyle, setMystyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  // const [btnText, SetBtnText] = useState("Enable Dark mode")
  // let toggleStyle = () => {
  //   if (mystyle.backgroundColor === 'white') {
  //     setMystyle({
  //       color: 'white',
  //       backgroundColor: '#042743'
  //     })
  //     SetBtnText("Enable light mode")
  //   } else {
  //     setMystyle({
  //       color: '#042743',
  //       backgroundColor: 'white'
  //     })
  //     SetBtnText("Enable dark mode")
  //   }
  // }
  let mystyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'#042743':'white'
}
  return (
    <>
      <div className="container" style={mystyle}>
        <h1 className="my-3">About us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyise Your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <p> Textutils gives the way to analyis your text  </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
