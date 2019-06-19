
import React,{useState} from 'react'
import style from 'src/comps/app/style'
import Header from 'src/comps/header/els'


const Container=({children})=>
<div className={style.flex}>{children}</div>

// const Header=()=>
// <div className={style.header}>hello</div>

const Content=()=>
<div className={style.content}>g</div>

const Footer=()=>
<div className={`${style.footer} ${style.border}`}>&copy; 2019 roger gomez</div>

export default (C4=>C3=>C2=>C1=>newIdeas=>props=>
{
  const [ideas, setIdea]=useState(newIdeas)
  const el=
  <div>
    <Container>
      <Header hello='hi' menu=
      {
        [
          'hey',
          'hoy',
          'how',
          'to'
        ]
      }
      />
      <Content/>
      <Footer/>
    </Container>
  </div>
  return el
})(Container)(Header)(Content)(Footer)({idea:'idea1'})
