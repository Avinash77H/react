
import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import ContextProvider from './Context/ContextProvider'

function App() {
  return (
<ContextProvider>
  <ThemeButton />
  <Card/>
</ContextProvider>
  )
}

export default App
