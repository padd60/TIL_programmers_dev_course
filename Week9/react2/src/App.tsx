import React, {
  ChangeEvent, useCallback, useState,
} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import useToggle from './hooks/useToggle';
import useKeyPress from './hooks/useKeyPress';
import useHover from './hooks/useHover';
import SignUpForm from './components/SignUpForm';
import ShowSum from './components/ShowSum';
import LoginForm from './components/LoginForm';
import CheckBox from './components/CheckBox';
import Box3 from './components/Box3';
import Box2 from './components/Box2';

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: aqua;
`;

const LoginContainer = styled.div`
  border: 3px solid;
  margin-top: 80px;
  padding: 80px;
  display: flex;
  justify-content: center;
`;

function App() {
  const [label, setLabel] = useState('Result');

  const [count, setCount] = useState(0);

  const [foodOn, setFoodOn] = useState(false);
  const [clothesOn, setClothesOn] = useState(false);
  const [shelterOn, setShelterOn] = useState(false);

  const foodChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFoodOn(e.target.checked),
    [],
  );
  const clothesChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setClothesOn(e.target.checked),
    [],
  );
  const shelterChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setShelterOn(e.target.checked),
    [],
  );

  const [on, toggle] = useToggle() as [boolean, () => void];

  const [ref, isHover] = useHover() as [React.MutableRefObject<null>, boolean];

  const keyPressed = useKeyPress('a');

  return (
    <>
      <div css={divStyle}>
        Hover to change color.
        <Box />
      </div>
      <button
        onClick={() => {
          setLabel((prev: string) => `${prev}:`);
        }}
      >
        Change label
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <ShowSum label={label} n={1000000000} />
      <Box2 />
      <CheckBox checked={foodOn} label="Food" onChange={foodChange} />
      <CheckBox checked={clothesOn} label="clothes" onChange={clothesChange} />
      <CheckBox checked={shelterOn} label="Shelter" onChange={shelterChange} />
      <button onClick={toggle}>{on ? 'true' : 'false'}</button>
      <CheckBox checked={on} label="Hooks" onChange={toggle} />
      {isHover ? 'hover' : 'mouseout'}
      <Box3 ref={ref} />
      {keyPressed && 'Pressed!!!!!!'}
      <LoginContainer>
        <LoginForm onSubmit={() => ''} />
        <SignUpForm onSubmit={() => ''} />
      </LoginContainer>
    </>
  );
}

export default App;
