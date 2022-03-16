import Intro from './components/introduction/Intro';
import './App.css';
import cert from './images/certificate.jpeg';
import About from './components/About/About';
import ProjectList from './components/ProjectList/ProjectList';
import Contacts from './components/Contacts/Contacts';
import Toggle from './components/Toggle/Toggle';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import { useContext, useState } from 'react';
import { ThemeContext } from './components/Context';


function App() {
const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;
const [isModalOpen, setIsModalOpen] = useState(false);

function toggleModal() {
  isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
}

  return (
    <div className="App"
    style= {{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode ? "white" : "black",
    }}>
      <Toggle />
      <Intro />
      <About 
      onIconClick={toggleModal} 
      />
      <ProjectList />
      <Contacts />
      <Modal 
      isOpen={isModalOpen} 
      onClose={toggleModal} 
      img={cert} 
      title={'Proudly presenting my officially earned certificate!'} />
    <Footer />
    </div>
    
  );
}

export default App;
