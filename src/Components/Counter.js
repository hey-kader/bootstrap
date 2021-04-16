import React, { useState, useEffect } from 'react';

function Counter () {
	const [count, setCount] = useState(0);

	useEffect(() => {
		var t = "active users: ";
		document.title = count;
	}); 
	

	return ( 
		<div>
			<p>"Count: {count}"</p>
			<button onClick={() => setCount(count+1)}>
				Click Me
			</button>
		</div>
	);
}

export default Counter;
