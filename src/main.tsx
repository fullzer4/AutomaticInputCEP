import { render } from 'preact'
import { App } from './app.tsx'
import "./scss/index.scss"

render(<App />, document.getElementById('app') as HTMLElement)
