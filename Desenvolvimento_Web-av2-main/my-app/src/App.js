import React, { useState } from 'react'
import Formulario from './components/Formulario';
import QuemSomos from './components/QuemSomos';
import './style.css';


function App() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    console.log('Dados do formulário:', data);
    setFormData(data); 
  };

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
          <Formulario onSubmit={handleFormSubmit} />
        </section>
        <section className="quem-somos">
          <QuemSomos />
        </section>
      </main>
    </div>
  );
}