import React, { useMemo } from 'react';

const sum = (n: number) => {
	let result = 0;

	for (let i = 1; i <= n; i++) {
		result += i;
	}

	return result;
};

const ShowSum = ({ label, n }: { label: string; n: number }) => {
	// const result = sum(n);
	const result = useMemo(() => sum(n), [n]);
	return (
		<span>
			{label}: {result}
		</span>
	);
};

export default ShowSum;
