import React from 'react';
import './styles.css';
import video from '../../Assets/beach-153167.mp4';
const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>
    </section>
  );
};

export default Home;

