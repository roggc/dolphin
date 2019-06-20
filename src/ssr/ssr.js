import fs from 'fs'
import path from 'path'
import App from 'src/render/root'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

export const __dev=__dev__

export const ssr=
(req,res)=>
{
  const context = {}
  const ssr=
  renderToString
  (
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )
  if (context.url) {
  // Somewhere a `<Redirect>` was rendered
  redirect(301, context.url);
} else {
  console.log('all good')
}
  fs.readFile
  (
    path.resolve('dist/foo.html'),'utf8',(err, data)=>
    {
      res.send
      (
        data.replace
        (
          '$ssr',
          ssr
        )
      )
    }
  )
}
