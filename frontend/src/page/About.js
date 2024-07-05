import React from 'react'

const About = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#da1313', padding: '20px', textAlign: 'center' }}>
        <h1>YOUR FAST CART</h1>
        <p>Your Ultimate Fastest Food Delivery Solution</p>
      </header>
      <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#292827de' }}>
        <h2>About Us</h2>
        <p>Welcome to YOUR FAST CART, your go-to destination for easy,fresh and fast food delivery...</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1', maxWidth: '300px', margin: '20px', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color:'#da1313'}} >Responsive Fullstack Experience: </h3>
          <p>Our app is built using the MERN stack, ensuring a smooth and responsive user experience...</p>
        </div>
        <div style={{ flex: '1', maxWidth: '300px', margin: '20px', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color:'#da1313'}} >Curated Selection: </h3>
          <p>We partner  offering a diverse range of food to satisfy every need...</p>
        </div>
        <div style={{ flex: '1', maxWidth: '300px', margin: '20px', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color:'#da1313'}} >User-Friendly Interface: </h3>
          <p>Our user interface is designed for simplicity and ease of use, making food ordering a breeze...</p>
        </div>
      </div>
    </div>
  )
}

export default About