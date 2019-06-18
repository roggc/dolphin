__dev__&& console.log('src/comps/test/hoc')

import hoc from 'src/hocs/hoc'
import A from 'src/comps/test/test'

export default
(
  hoc
  (
    {
      idea1:'hello'
    }
  )
  (
    {
      privata:'none'
    }
  )
)(A)
