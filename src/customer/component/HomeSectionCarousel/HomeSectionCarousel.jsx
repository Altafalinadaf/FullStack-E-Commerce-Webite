import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {
    const responsive = {
        // based on our screen resolution we can display the images
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items=[1,1,1,1,1].map((item)=><HomeSectionCard/> )
  return (
    <div>
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
        responsive={responsive}
    />
    </div>
  )
}

export default HomeSectionCarousel