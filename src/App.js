import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import LastComponent from './components/LastComponent';
import CardComponent from './components/Card';
import FirstRow from './components/FirstRow';
import SecondRow from './components/SecondRow';
import TimerComponent from './components/TimerComponent';

function App() {
  return (
    
      <div className="App">
        <Header />
        <MainContent />
        <div style={{hight:'100%', width: '100%' , background:'black'}}
        >
        <FirstRow />
        <SecondRow />
        <TimerComponent />  
        <CardComponent />
        <LastComponent />
        </div>
        <Footer />
      </div>

  );
}

export default App;