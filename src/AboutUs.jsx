import React from 'react';

function AboutUs() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '60px auto',
      padding: '40px',
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h2 style={{ color: '#2d6a4f', fontSize: '2rem', marginBottom: '20px' }}>
        About Paradise Nursery
      </h2>
      <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
        Welcome to <strong>Paradise Nursery</strong> — your one-stop destination for
        beautiful, healthy plants. We are passionate about bringing the beauty of
        nature into your home and garden.
      </p>
      <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
        Founded with a love for greenery, Paradise Nursery offers a wide variety of
        indoor and outdoor plants, from lush tropical specimens to hardy succulents.
        Our expert team carefully selects and nurtures each plant to ensure it arrives
        at your doorstep in perfect condition.
      </p>
      <p style={{ color: '#555', lineHeight: '1.8' }}>
        Our mission is to make plant shopping easy, enjoyable, and accessible for
        everyone — whether you're a seasoned gardener or just starting your plant
        journey.
      </p>
    </div>
  );
}

export default AboutUs;
