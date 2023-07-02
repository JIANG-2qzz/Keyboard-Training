import Layout from "./Layout/layout"
import Main from "./Components/Main/Main.jsx"
import Card from "./Components/Card/Card.jsx"
import Shade from "./Components/Shade/Shade"
import { useState } from "react"
//ceshi 
function App() {
  const [num,setNum] = useState(0);
  const [successInput,setSuccessInput] = useState(0);
  const [failInput,setFailInput] = useState(0);
  const [shade,setShade] = useState(true)

  function reqNum(num,successInput,failInput){
    setNum(num)
    setSuccessInput(successInput)
    setFailInput(failInput)
  }

  function reqShade(shade){
    setShade(shade)
  }

  return (
    <>
    <Layout>
      <Shade reqShade={reqShade}></Shade>
      <Main reqNum={reqNum} shade={shade}></Main>
      <Card num={num} successInput={successInput} failInput={failInput} shade={shade}></Card>
    </Layout>
    </>
  )
}

export default App
