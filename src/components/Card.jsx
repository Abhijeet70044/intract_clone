import React, { useState } from 'react';

const CardComponent = () => {
    const [openVideoIndex, setOpenVideoIndex] = useState(-1);

    const openVideo = (index) => {
      setOpenVideoIndex(index);
    };

//   const closeVideo = () => {
//     setOpenVideoIndex(-1);
//   };

  const list = [
    {
      key: '1-1',
      content: 'How to Plan Retirement from Crypto',
      imageUrl: 'https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png',
      videoUrl: 'https://www.youtube.com/embed/NkDtaXvzt-I?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1',
    },
    {
      key: '1-2',
      content: 'How to Plan Retirement from Crypto',
      imageUrl: 'https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png',
      videoUrl: 'https://www.youtube.com/embed/NkDtaXvzt-I?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1',
    },
    {
      key: '1-3',
      content: 'How to Plan Retirement from Crypto',
      imageUrl: 'https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png',
      videoUrl: 'https://www.youtube.com/embed/NkDtaXvzt-I?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1',
    },
    {
      key: '1-4',
      content: 'How to Plan Retirement from Crypto',

      imageUrl: 'https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png',
      videoUrl: 'https://www.youtube.com/embed/NkDtaXvzt-I?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Top Crypto Creators and Projects to Follow</h1>
      <p style={styles.subheader}>Answers to your crypto doubts, straight from the experts</p>
      <div style={styles.cardsContainer}>
      {list.map((item, index) => (
          <div key={item.key} style={styles.card}>
            {openVideoIndex !== index ? (
              <img
                src={item.imageUrl}
                alt={item.content}
                style={styles.image}
                onClick={() => openVideo(index)}
              />
            ) : (
              <iframe
                title={item.content}
                width="281"
                height="481"
                src={item.videoUrl}
                frameBorder="0"
                allowFullScreen
                style={styles.video}
              />
            )}
            <div style={styles.cardContent}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
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
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px', // Adjust the gap between cards
    flexWrap: 'wrap', // Allows cards to wrap to the next row if necessary
  },
  card: {
    position: 'relative',
    width: '281px', // Fixed width of the card
    height: '481px', // Fixed height of the card
    borderRadius: '10px',
    overflow: 'hidden', // Ensures the video or image stays within the card bounds
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    textAlign: 'left',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default CardComponent;
