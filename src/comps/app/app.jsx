__dev__&&console.log('src/comps/app/hoc')

import React from 'react'
import Header from 'src/comps/header/hoc'
import Content from 'src/comps/content/hoc'
import Footer from 'src/comps/footer/hoc'
import style from 'src/comps/app/style'

export default
(props)=>
<div className={`${style.flex} ${style.generics}`}>
    <Header message={'hello, this is react development page'}
    contentMenu=
    {
      [
        'login'
      ]
    }
    >{{idea4:'ignore it'}}</Header>
    <Content/>
    <Footer message={<span>&copy; 2019 roger gomez</span>}/>
</div>
