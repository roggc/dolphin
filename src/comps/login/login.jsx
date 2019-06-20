__dev__&&console.log('src/comps/login/login')

import React from 'react'
import style from 'src/comps/login/style'

export default
({children},content, ...rest)=>
<div className='flex1'>
  <div className='row1 flex2'>
    <div className='col2'>{content.message1}</div>
    <div className='col2'></div>
  </div>
  <div className='row1 flex2'>
    <div className='col2'>{content.message2}</div>
    <div className='col2'>ddd</div>
  </div>
  <div className='row1 flex2'>
    <div className='col2'></div>
    <div className='col2'>{content.btnMessage}</div>
  </div>
</div>
