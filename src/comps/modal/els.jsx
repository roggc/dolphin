__dev__&& console.log('src/comps/modal')

import React from 'react'
import style from 'src/comps/modal/style'

export default ({content})=>
<div className={`${style.containerModal}`}>
    <div className={`${style.modal}`}>
      {content}
    </div>
</div>
