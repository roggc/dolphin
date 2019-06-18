__dev__&& console.log('src/hocs/hoc')

import React,{useState} from 'react'

export default iState=>props=>C=>({children,...rest})=>
  {
    const [state,setState]=
    useState
    (
      {
        ...iState,
        ...children
      }
    )
    return <C{...props}{...rest}>{{...state,...children}}</C>
  }
