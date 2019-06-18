import React from 'react'
import style from 'src/comps/header/style'
import Menu from 'src/comps/menu/els'


export default ({hello,menu})=>
<div className={style.header}>
  <div className={style.container}>
    <div>{hello}</div>
    <div><Menu menu={menu}/></div>
  </div>
</div>
