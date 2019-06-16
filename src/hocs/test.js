import React,{useState} from 'react'


const newIdeas=
{
  idea1:'nothing'
}

const actions=
{
  
}



const V=actions=>newIdeas=>
{
  const onClickAct=()=>
  {
    setIdeas
    (
      {
        ...ideas,
        idea1:'idea-1'
      }
    )
  }
  const [ideas,setIdeas]= useState(newIdeas)
  const el=
  <div>
    {  console.log(ideas)}
  <button onClick={onClickAct}>click</button>
    { console.log(ideas)}
  </div>
  return el
}

export default V(actions)
