import React from 'react'
import Modal from 'src/comps/modal/els'
import style from 'src/comps/menu/style'

export default ({menu,menuClick})=>
<div onClick={menuClick} className={style.icon}>
  <div>
    <i className="fas fa-bars"></i>
  </div>
  <Modal content=
    {
      menu.map
      (
        (e,i)=>
        <div key={i} onClick={menuClick}>{e}</div>
      )
    }
  />
</div>
