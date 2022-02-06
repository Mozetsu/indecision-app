import React from 'react';

const Action = ({ handlePick, hasOptions }) => (
	<div>
		<button onClick={handlePick} disabled={!hasOptions}>
			What should I do?
		</button>
	</div>
);

export default Action;
