import React, {
  useEffect,
  useRef, useState,
} from 'react';

type propsType = {
  lazy:boolean,
  threshold: number,
  placeholder: string,
  src:string,
  block:boolean,
  width:number | string,
  height:number | string,
  alt: string,
  mode:string,
  style:any,
}

const Image = ({
  lazy, threshold = 0.5, placeholder, src, block, width, height, alt, mode, ...props
}:propsType) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null) as React.MutableRefObject<HTMLImageElement | null>;

  let observer: null | IntersectionObserver = null;
  const LOAD_IMG_EVENT_TYPE = 'loadImage';

  const onIntersection = (entries:IntersectionObserverEntry[], io:IntersectionObserver) => {
    entries.forEach((entry:IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
      }
    });
  };

  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode,
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current as HTMLElement;

    // eslint-disable-next-line no-unused-expressions
    imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);

    return () => {
      // eslint-disable-next-line no-unused-expressions
      imgElement
      && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy, threshold]);

  useEffect(() => {
    if (!lazy) return;

    if (!observer) {
      observer = new IntersectionObserver(onIntersection, { threshold });
    }

    // eslint-disable-next-line no-unused-expressions
    imgRef.current && observer.observe(imgRef.current);
  }, [lazy]);
  return (
    <img
      style={{
        ...props.style,
        ...imageStyle,
      }}
      alt={alt}
      ref={imgRef}
      src={loaded ? src : placeholder}
    />
  );
};

export default Image;
