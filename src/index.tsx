import * as React from 'react'
import * as ReactDOM from 'react-dom'

export const App: React.FC = () => {
  return <div>Hello World</div>
}

ReactDOM.render(<App />, document.getElementById('app'))
