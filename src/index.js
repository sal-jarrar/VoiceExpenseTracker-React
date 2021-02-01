import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'
import './index.css'

ReactDOM.render(
  <SpeechProvider appId='690e083a-c773-4bad-a3ad-0a6723b163d3' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
)
