import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";
import "./style.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <section id="center">
        <div>          
          <h1>Olá, seja bem vindo ao meu portifólio</h1>
          <p>
            Aqui você encontra informações sobre mim e meus trabalhos.
          </p>
        </div>
        <div className="hero">
         {/*  <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" /> */}
          <img src="/yeda1.jpg" alt="Férias" style={{ maxWidth: "50%", height: "auto" }} />
        </div>    
        
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          
          <Sobre />
          <ul>
            <li>
              <a href="http://lattes.cnpq.br/0152954677193492" target="_blank">
                <img className="button-icon" src="/curriculo.png" alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          
          <Projetos />
          
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      <Footer />
    </>
  )
}

export default App
