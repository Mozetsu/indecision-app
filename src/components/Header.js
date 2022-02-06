import React from 'react';

const Header = ({ title, subtitle }) => (
	<div className="header">
		<h1 className="header__title">{title}</h1>
		{subtitle && <h2 className='header__subtitle'>{subtitle}</h2>}
	</div>
);

export default Header;
