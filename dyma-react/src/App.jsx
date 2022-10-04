import './App.scss'
import Articles from './components/Articles'
import Hello from './Hello'

function App() {

  return (
    <div className="App">
      <Articles display = {true} />
      <Hello name="Leonel" age={18} />
    </div>
  )
}

export default App
