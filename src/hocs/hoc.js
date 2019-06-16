__dev__&& console.log('src/hocs/hoc')
import React,{useState} from 'react'
export default
newideas=> actions=>C=>({children,...rest})=>
{
  const [ideas,setIdeas]=useState(newIdeas)
  return <C {...actions} {...rest} >{{...ideas,...children}}</C>
}



// export default
// newIdeas=>C=>({children,...moreActions})=>
// {
//   const [ideas,setIdeas]=useState({newIdeas})
//   return <C {...actions(ideas)(setIdeas)} {...moreActions} >{{...ideas,...children}}</C>
// }

// ()=>
// {
//   const [ideas,setIdeas]=useState({...moreIdeas})
// }
