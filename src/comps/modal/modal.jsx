__dev__&& console.log('src/comps/modal')

import React from 'react'
import style from 'src/comps/modal/style'

export default ({content})=>
<div className={`${style.containerModal}`} style={{right:'68px'}}>
    <div className={`${style.modal}`}>
        {content&& content.map
        (
          (e,i)=>
          <div key={i}>{e}</div>
        )
      }
    </div>
</div>
