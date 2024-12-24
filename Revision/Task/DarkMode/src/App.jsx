
import './App.css'
import Card from './componenets/Card'
import ThemeButton from './componenets/ThemeButton'
import ContextProvider from './Context/ContextProvider'

function App() {
  return (
<ContextProvider>
  <ThemeButton/>
  <Card/>
</ContextProvider>
  )
}

export default App
