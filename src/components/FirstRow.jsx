import React from 'react';
import CollapseComponent from './Collapse';
import SmallCard from './SmallCard';

const FirstRow =()=> {
  return (
    
      <div className="App">
        <div style={{hight:'100%', width: '100%', display: 'flex', background:'black'}}> 
        <CollapseComponent/>
        <div style={{marginRight: '10px', display: 'flex', marginTop: '14%'}}>
          <SmallCard/>
        </div>
      </div>
</div>
  );
}

export default FirstRow;