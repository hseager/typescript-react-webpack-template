import React from 'react'
import ReactDOM from 'react-dom'

export const App: React.FC = () => {
  return <div>Hello World</div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
)
