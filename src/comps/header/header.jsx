__dev__&&console.log('src/comps/header/header')

import React from 'react'
import style from 'src/comps/header/style'
import Modal from 'src/comps/modal/hoc'

export default
({message,onClickMenu,contentMenu,children,children:{showMenu},state,setState},...rest)=>
<div className={`${style.border}`}>
  <div>{message}</div>
  <div className={style.menu} onClick={onClickMenu(state)(setState)}>
    <div>
      <i className="fas fa-bars"></i>
    </div>
    {showMenu&&<Modal content={contentMenu} style={{right:'68px'}}/>}
  </div>{console.log(children)}
</div>
