import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextUtils(props) {
  const [Text, SetText] = useState("")

  const clearText = () => {
    SetText("")
    props.alertMessage('cleared', "success")

  }


  const changeFunc = (event) => {
    SetText(event.target.value)
  }

  const response = () => {
    let upper = Text.toUpperCase()
    SetText(upper)
    props.alertMessage('UpperCase', "success")
  }
  const toLower = () => {
    let lower = Text.toLowerCase()
    SetText(lower)
    props.alertMessage('LowerCase', "success")
  }


  const copy = () => {
    // let textArea = document.getElementById('floatingTextarea2')
    // textArea.select()
    // navigator.clipboard.writeText(textArea.value)
    navigator.clipboard.writeText(Text)
    document.getSelection().removeAllRanges()
    props.alertMessage('Text Copied', 'success')
  }

  const extraSpaces = () => {
    let newText = Text.split(/[ ]+/)
    SetText(newText.join(' '))
    props.alertMessage('ExtraSpaces Cleared', 'success')
  }
  // const [textBtn , setTextBtn] = useState("Enable Dark Mode")
  // const [theme,setTheme] = useState({
  //   color : '#1f3925',
  //   backgroundColor : 'white'
  // },
  // )


  // const applyTheme = ()=>{
  //   if (props.mode === 'dark'){
  //     setTheme( {
  //       color : 'white',
  //       backgroundColor : '#1c2b20'
  //     })
  //   setTextBtn("Enable Light Mode")
  //   }
  //   else{
  //     setTheme( {
  //       color : '#1c2b20',
  //       backgroundColor : 'white'
  //     })
  //   setTextBtn("Enable Dark Mode")

  //   }

  // }
  let length = Text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length
  return (
    <>

      <div className="container " style={{ backgroundColor: props.mode === "dark" ? "rgb(61 88 68)" : "white",color: props.mode === "light" ? "black" : "white", width: '50%', marginTop: '30px' ,padding :'10px',borderRadius:'5px'}} >
        <div className="form-floating " >
          <textarea className="form-control" value={Text} style={{ backgroundColor: props.mode === "dark" ? "rgb(61 88 68)" : "white", color: props.mode === "light" ? "#1c2b20" : "white", height: '30vh' }} placeholder="Leave a comment here" id="floatingTextarea2" onChange={changeFunc} ></textarea>
          <label htmlFor="floatingTextarea2" >Comments </label>
        </div>
        <button disabled={Text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={response} >toUpper</button>
        <button disabled={Text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={toLower} >toLower</button>
        <button disabled={Text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={clearText} >Clear</button>
        <button disabled={Text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={copy} >Copy</button>
        <button disabled={Text.length === 0} className='btn btn-primary mx-1 mt-3' onClick={extraSpaces} >Extra Spaces</button>
        {/* <button className='btn btn-primary mx-1.5' onClick={applyTheme} >{textBtn}</button> */}

        <h2>No.of words :{length}</h2>
        <h2 >No.of characters :{Text.length}</h2>
        <h2 >time : {0.008 * length} mins</h2>
        <h2>Preview </h2>
        <div>{Text.length > 0 ? Text : "Enter SomeThing to preview"}</div>
        {/* {{{Text}.length > 0 ? {Text} : "Enter someThing to preview"}} */}
      </div>

    </>
  )
}