import React from 'react';
import { Collapse, Progress } from 'antd';
import { CaretUpOutlined, CaretDownOutlined, CheckCircleOutlined} from '@ant-design/icons';
import './Collapse.css';

const text=[
  { 
    key: '1-1', 
    content: '#1: But what is crypto and web3?',
    label: '11 Tasks',
    imageUrl: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
    progress: 50
  },
  { 
    key: '1-2', 
    content: '#2: Setting up your own web3 wallet!',
    label: '8 Tasks',
    imageUrl: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg',
    progress: 30
  },
  { 
    key: '1-3', 
    content: '#3: What the heck is a blockchain?',
    label: '9 Tasks',
    imageUrl: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg',
    progress: 80
  },
  { 
    key: '1-4', 
    content: '#4: Swapping and bridging? What’s that?',
    label: '15 Tasks',
    imageUrl: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg',
    progress: 80
  },
  { 
    key: '1-5', 
    content: 'Child 3 of Panel 1',
    label: '5 Tasks',
    imageUrl: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg',
    progress: 80
  },
  { 
    key: '1-6', 
    content: 'Child 3 of Panel 1',
    label: '4 Tasks',
    imageUrl: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg',
    progress: 80
  },
]



const items = [
  {
    key: '1',
    label: (
      <div className="label-content">
        <div className='container'>
          <div className='img-container'>
            <img
              src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
              alt="Intract Logo"
              style={{ width: '142px', height: '162px', display: 'block', margin: 'auto', borderRadius: '19px', padding: '12px' }}
            />
          </div>
          <div className='right-container'>
            <h1>Basics of Crypto</h1>
            <h2>The safest and easiest  place to start your crypto journey!</h2>
            <span>- - - - - - - - - - - - - - - - - - - - - - - - - - - -- - -</span>
            <button className='button'> <img src="https://www.intract.io/assets/xp-icon-aacd204a.svg" alt="" width="18" height="16" style={{marginRight:'4px'}}></img>149 XPs</button>
          </div>
        </div>
      </div>
    ),
    // children: <p>{text}</p>,
    children: (
      <div className='child-container'>
      {text.map(item => (
        <div className='sub-container' key={item.key}>
          <div className='sub-container-row'>
            <div className='left-data'>
            <img src={item.imageUrl} alt={item.content} style={{width:'120px', height:'80px', borderRadius:'12px'}}/>
            </div>
            <div className='right-data'>
            <p>{item.content}</p>
            <span className='dash'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - </span>
           <div className='progress-row'>
           <h3>{item.label}</h3>
           <div className='progress'><Progress percent={100} size={[230, 14]} showInfo={false}/></div>
           <CheckCircleOutlined />
           </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    ),
  },
];

const CollapseComponent = () => {

  return (
    <div className='main-container'>
      <div className='collapse-container'>
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) =>
            (isActive ? <CaretUpOutlined /> : <CaretDownOutlined className="icon-caret" />)
          }
          expandIconPosition="end"
          items={items}
        />
      </div>
    </div>
  );
};

export default CollapseComponent;
