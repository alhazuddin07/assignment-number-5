import { Suspense } from "react";
import type { Icard } from "./types/card";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Footer from "./Components/Footer";


const cardsPromise: Promise<Icard[]> = fetch("/data.json")
    .then((res) => res.json());


function App() {

    return (
        <>

            <Nav />

            <Banner />

            <Suspense fallback={<div>Loading...</div>}>
                <Card cardsPromise={cardsPromise} />
                <Footer />
            </Suspense>

        </>
    );
}

export default App;
