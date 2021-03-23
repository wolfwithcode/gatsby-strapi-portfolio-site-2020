import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const MyImage = (props) => (
  <LazyLoadImage
    alt={props.alt}
    effect="blur"
    src={props.src} 
    height={props.height}
    weight={props.weight}
    />
);

export default MyImage;