import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ShowSum from './components/ShowSum';
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

function App() {
	const [label, setLabel] = useState('Result');

	const [count, setCount] = useState(0);
	return (
		<>
			<div css={divStyle}>
				Hover to change color.
				<Box />
			</div>
			<button
				onClick={() => {
					setLabel((prev: string) => prev + ':');
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
		</>
	);
}

export default App;
