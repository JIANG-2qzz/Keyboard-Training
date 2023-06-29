import Layout from "./Layout/layout"
import Main from "./Components/Main/Main.jsx"
import Card from "./Components/Card/Card.jsx"
import { useState } from "react"

function App() {
  const [num,setNum] = useState(0);
  const [successInput,setSuccessInput] = useState(0);
  const [failInput,setFailInput] = useState(0);
  function reqNum(num,successInput,failInput){
    setNum(num)
    setSuccessInput(successInput)
    setFailInput(failInput)
  }


  return (
    <>
    <Layout>
      <Main reqNum={reqNum}></Main>
      <Card num={num} successInput={successInput} failInput={failInput}></Card>
    </Layout>
    </>
  )
}

export default App
