import { Suspense } from "react"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Card from "./Components/Card"


function App() {
  

  return (
    <>
      
      <Nav />
      <Banner />
      <Suspense fallback={<p>Loading...</p>}>
        <Card />
      </Suspense>

    </>
  )
}

export default App
