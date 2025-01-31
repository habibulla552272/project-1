import React from 'react'
import heroImage from './HeroImage/hero-illustration.webp'

const Hero = () => {
  return (
    <section>
      <div className=''>

    <img className='  w-full h-[100px] md:h-[250px]' src={heroImage} alt="" />
      </div>
    </section>
  );
}

export default Hero
