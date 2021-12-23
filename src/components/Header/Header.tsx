import { Container } from "./styles"
import { BrowserRouter as Router } from "react-router-dom"
import {NavHashLink, HashLink} from "react-router-hash-link"
import { useState } from "react"

import Curriculo from "../../assets/CV_JoaoTulio.pdf"
export function Header(){
  const [isActive, setActive] = useState(false);
  
  return(
    <Container>
        <Router>
          <HashLink smooth to="#home" className="logo">
            <span>J</span>
            <span>Tulio</span>
          </HashLink>

          <nav className={isActive ? 'active' : ''}>
            <NavHashLink smooth to="#home" >Home</NavHashLink>
            <NavHashLink smooth to="#sobre">Sobre mim</NavHashLink>
            <NavHashLink smooth to="#portfolio">Portfólio</NavHashLink>
            <NavHashLink smooth to="#contato">Contato</NavHashLink>
            <a href={Curriculo} download className="button">CV</a>
          </nav>

          <div
            aria-expanded={isActive ? "true" : "false"}
            aria-haspopup="true"
            aria-label={isActive ? "Fechar menu" : "Abrir menu"} 
            className={isActive ? 'menu active' : 'menu'} 
            onClick={() => {setActive(!isActive)}}
            >
          </div>

        </Router>
      </Container>
      
  )
}