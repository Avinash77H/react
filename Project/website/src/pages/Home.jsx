import React from 'react'
import '../App.css'
import { ObjectComp } from '../components/ObjectComp'
import { MdArrowOutward } from "react-icons/md";
import Card from '../components/Card'
import MultipleItems from '../components/MultipleItem';
import Slider from "react-slick";
import fashion from '../assets/fashion.jpg'
import bags from '../assets/bags.jpg'
import accessories from '../assets/accessories.jpg'
import cloth from '../assets/clothing.jpg'
import sunglass from '../assets/sunglasses.jpg'
import HeroSlider from '../components/HeroSlider'
import Marquee from '../components/Marquee';

import Categories from '../components/Categories';


const productList = [{
  name: 'Fashion1',
  image: fashion,
}, {
  name: 'Bags2',
  image: bags,
},
{
  name: 'Accessories3',
  image: accessories
}, {
  name: 'Cloth4',
  image: cloth,
},
{
  name: 'Sunglass5',
  image: sunglass
}]


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
      <MultipleItems/>
      <Categories/>

    </>
  )
}

export default Home

