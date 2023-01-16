import React from 'react';
import { Menu, Icon, Input, Segment } from 'semantic-ui-react';
import '../pages/_app.js';

const Footer = (props) => {
	return (
		<div>
			<Segment className="sticky-footer" style={{ position:'absolute', bottom:'0', width: '60%', height: '50px'}} inverted color="grey">
				Copyright &copy; 2019 | Todos os direitos reservados
			</Segment>
		</div>
	)
}

export default Footer;