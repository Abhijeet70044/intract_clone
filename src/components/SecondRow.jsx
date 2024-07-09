import React from 'react';
import CollapseComponent from './Collapse';
import SmallCard from './SmallCard';

const SecondRow =()=> {
  return (
    
      <div className="App">
        <div style={{hight:'100%', width: '100%', display: 'flex', background:'black'}}> 
        <div style={{marginLeft: '40px', display: 'flex', marginTop: '14%'}}>
          <SmallCard/>
        </div>
        <CollapseComponent/>
      </div>
</div>
  );
}

export default SecondRow;