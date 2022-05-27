import React from 'react';

const Box2 = React.memo(() => {
  console.log('render!!!!');
  const style = {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  };
  return <div style={style} />;
});

Box2.displayName = 'Box3';

export default Box2;
