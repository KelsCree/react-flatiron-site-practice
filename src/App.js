import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/BoxLink'
import BoxLink from './Components/BoxLink';

function App() {


  const modules = [
    {
      displayLabel: ""
    }
  ]
  return (
  <div id="app" className="">
      <header className="app-header">
        <h1>
          <a href="/" className="router-link-active">
            <img src="/img/flatiron-logo.d5a3ddbe.png" alt="logo" />
            <span>Flatiron School</span>
          </a>
        </h1>
        <section>
          <a href="/videos" className="">Videos</a>
          <a href="/create-user" className="">Create User</a>
          <a href="/logout" className="">Logout Kyle Coberly</a>
        </section>
      </header>
      <main>
        <div className="modules">
          <nav>
            <ul className="modules">
            <BoxLink displayLabel="1" url="/modules/1/"/>
            <BoxLink displayLabel="2" url="/modules/1/" isActive={true}/>
            <BoxLink displayLabel="3" url="/modules/1/"/>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}

export default App;
