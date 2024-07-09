import React from 'react';

const LastComponent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Crypto Dictionary</h1>
      <p style={styles.subheader}>Your one-stop to catch up on all crypto terms</p>
      <div style={styles.imageContainer}>
        <img 
          src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg" 
          alt="Crypto Dictionary" 
          style={styles.image} 
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#000',
    borderRadius: '5px',  
    color: '#fff', // Added to ensure text color is white
  },
  header: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  subheader: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Added to center content vertically
    flexDirection: 'column', // Added to stack overlayText and additional text below image
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block', // Ensures the image takes the full width available
    margin: '0 auto', // Centers the image horizontally
  },
};

export default LastComponent;
