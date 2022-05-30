import React from 'react';

type propsType = {
  src:string,
  width:number | string,
  height:number | string,
  alt: string,
  style:any,
}

const Image = ({
  src, width, height, alt, ...props
}:propsType) => {
  const imageStyle = {
    width,
    height,
  };
  return (
    <img
      style={{
        ...props.style,
        ...imageStyle,
      }}
      alt={alt}
      src={src}
    />
  );
};

export default Image;
