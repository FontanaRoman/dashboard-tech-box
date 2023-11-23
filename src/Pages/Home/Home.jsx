import React from "react";
import TitleHome from "../../Component/TitleAnimado";
import Waves from "../../Component/Waves";
import Links from "../../Component/Link";
function Home() {
    return (
        <>
        <section className="ContentHome">
            <TitleHome />
            <Links />
            <Waves />
        </section>
        </>
    );
}

export default Home;
