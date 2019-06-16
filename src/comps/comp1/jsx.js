import React,{useState} from 'react'

export default
((weapons)=>(newIdeas)=>(props)=>
{
  const [ideas, setIdea]=useState(newIdeas)
  const jsx=
  <div>
    <span>hello</span>
  </div>
  return jsx
})('ak47')({idea:'idea1'})
