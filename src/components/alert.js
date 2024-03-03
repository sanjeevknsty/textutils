import React from 'react'
// import PropTypes from 'prop-types'

export default function alert(props) {
  return (
    <div style={{height:'50px'}}>
      {props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
        <strong>{props.alert.type} </strong> {props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div>
    
  )
}
