import React,{useState} from 'react'


const C3=()=> <div>hello</div>
const C2=()=> <div>good bye</div>
const C1=()=> <div>never see you</div>

export default
((Comp3)=>(Comp2)=>(Comp1)=>(newIdeas)=>(props)=>
{
  const [ideas, setIdea]=useState(newIdeas)

  return <div><C1/><C2/><C3/></div>


})(C3)(C2)(C1)({idea:'idea1'})
