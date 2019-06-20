__dev__&& console.log('src/comps/modal')

import React from 'react'
import style from 'src/comps/modal/style'

export default ({content,opa})=>
<div className={`${style.containerModal}`} style={{right:'68px'}}>
    <div className={`${style.modal} ${style.fade}
    ${opa===1?style.show:style.notShow}`}>
        {content&& content.map
        (
          (e,i)=>
          <div key={i}>{e}</div>
        )
      }
    </div>
</div>
