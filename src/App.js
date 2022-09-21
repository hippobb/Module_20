import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About me';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    
    { name : 'about me', description:'haha'},
    { name : 'portfolio', description:'haha'},
    { name: 'contact', description: 'Contact me' },
    { name : 'resume', description:'haha'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <><div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {(() => {
          switch (currentCategory.name) {
            case "about me": return <About></About>;
            case "contact": return <Contact></Contact>;
            case "portfolio": return <Portfolio></Portfolio>;
            case "resume": return <Resume></Resume>;
            default: return <About></About>;
          }
        })()}
      </main>
    </div>
    <div>
        <Footer></Footer>
      </div></>
  );
}

export default App;
