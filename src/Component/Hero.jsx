import React from 'react'
import heroImage from '../assets/hero-illustration.webp'

const Hero = () => {
  return (
    <section>
      <div className=''>

    <img className=' absolute w-full h-[100px] md:h-[250px]' src={heroImage} alt="" />
      </div>
    </section>
  );
}

export default Hero
