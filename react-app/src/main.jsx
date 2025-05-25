import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'div',
  {id:'react-element'},
  React.createElement('h1',null,'I am a h1 tag'),
  React.createElement('h2',null,'I am a h2 tag')
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    reactElement
  </StrictMode>,
)
