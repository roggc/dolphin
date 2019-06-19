__dev__&& console.log('src/comps/header/hoc')

import hoc from 'src/hocs/hoc'
import C from 'src/comps/header/header'

const onClickMenu=state=>setState=>()=>
{
  setState
  (
    {
      ...state,
      showMenu:!state.showMenu
    }
  )
}

export default
(
  hoc
  (
    {
      showMenu:false
    }
  )
  (
    {
      onClickMenu
    }
  )
  (C)
)
