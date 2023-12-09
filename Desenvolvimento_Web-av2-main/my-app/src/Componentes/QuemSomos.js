import React from 'react';
import Formulario from './Formulario';
import './style.css';


function QuemSomos() {
  return (
    <div className="App">
      <header className="nav-menu">
        <nav className="nav-list">
          <ul>
            <li><a href="/">Quem somos?</a></li>
            <li><a href="/cadastro">Cadastre-se</a></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <section className="cadastro">
          <Formulario /> 
        </section>
        <section className="quem-somos">
        </section>
      </main>
    </div>
  );
}

export default QuemSomos;
