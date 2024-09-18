import React from 'react'
import '../App.css'
import HeroSlider from '../components/HeroSlider'
import Marquee from '../components/Marquee';
import GridSeller from '../components/GridSeller';
import Categories from '../components/Categories';
import Look from '../components/Look';
import Client from '../components/Client';
import Swiper from '../components/Swiper';
import ShopGram from '../components/ShopGram';
import IconContainer from '../components/IconContainer';
import Footer from '../components/Footer';



function Home() {
  const settings = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  
  return (
    <>
      <HeroSlider />
      <Marquee/>
      <Categories/>
      <GridSeller/>
      <Look/>
      <Client/>
      <Swiper/>
      <ShopGram/>
      <IconContainer/>
      <Footer/>
    </>
  )
}

export default Home

