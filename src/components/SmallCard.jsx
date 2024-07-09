import React from 'react';
import './SmallCard.css';
const SmallCard = () => {
    return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
            alt="Crypto Dictionary"
            style={styles.image}
          />
          <div style={styles.lockContainer}>
            <a href="https://www.freeiconspng.com/img/29056" title="Image from freeiconspng.com">
              <img
                src="https://www.freeiconspng.com/uploads/lock-icon-11.png"
                width="50"
                alt="Lock Icon Vector"
                style={styles.lockIcon}
              />
            </a>
          </div>
        </div>
        <h1 style={styles.title}>Intract Certified: Learner NFT</h1>
        <p style={styles.subtitle}>Your crypto black-belt certificate</p>
        <button style={styles.button}>Claim</button>
      </div>
      </div>
    );
  };
  
  const styles = {
    main:{
        backgroundColor:'black',
    },
    title: {
        fontSize: '18px',
        margin: '10px 0',
      },
    container: {
      textAlign: 'center',
      backgroundColor: 'black',
      color: '#fff',
      padding: '20px',
      borderRadius: '10px',
      border: '#fff',
      width: '220px',
      marginLeft: 'auto',
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
      borderRadius: '10px',
      width: '100%',
    },
    lockContainer: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
    },
    lockIcon: {
      width: '50px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#aaa',
      margin: '5px 0',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
  export default SmallCard;