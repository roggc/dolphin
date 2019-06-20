__dev__&&console.log('src/comps/content/content')

import React from 'react'
import style from 'src/comps/content/style'
import {Route} from 'react-router-dom'
import Foo from 'src/comps/foo/hoc'

export default
(props)=>
<div className={style.content}>
  <Route render=
  {
    ()=><Foo messages=
    {
      {message1:'you are a bitch'},
      {message2:'i am a fool'},
      {message3:'this is crazy'}
    }/>
  }
  />
</div>
