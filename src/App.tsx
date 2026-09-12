import { Suspense } from "react"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Card from "./Components/Card"
import type { Icard } from "./types/card"
import Footer from "./Components/Footer"


const cardsFetch = async ():Promise<Icard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}


function App() {
  const cardsPromise = cardsFetch();
  
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<p>Loading...</p>}>
        <Card cardsPromise={cardsPromise}/>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
