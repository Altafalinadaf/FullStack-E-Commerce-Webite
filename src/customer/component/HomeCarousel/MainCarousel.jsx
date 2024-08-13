import React from 'react'
import { mainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarousel = () => {

    const items = mainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=" "/>)
  return (
    <AliceCarousel
        items={items}
        // this is for disabling the cahnging images in front page of carousel (front 4 big images)
        disableButtonsControls
        // the image should automatically change (front 4 big images)
        autoPlay

        // giving timing between changning the images (front 4 big images)
        autoPlayInterval={1000}

        // auto playing image infinty time when it reach to the end image
        infinite
    />
  )
}

export default MainCarousel