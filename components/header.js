import React, { useState } from 'react';
import { Menu, Icon, Input } from 'semantic-ui-react';
import { Link } from '../routes';
import Search from './search';

const Header = (props) => {

	return (
	
	<div>
		<Menu style={{ marginTop: '10px', marginBottom: '10px'}}>
			<Link route="/">
				<a className="item">CrowdCoin</a>
			</Link>

			<Search />

			<Menu.Menu position="right">
				<Link route="/">
					<a className="item">Campaigns</a>
				</Link>

				<Link route="/campaigns/new">	
					<a className="item"> <Icon name="plus"></Icon> </a>
				</Link>

			</Menu.Menu>

		</Menu>
	</div>
		
	);
};

export default Header;