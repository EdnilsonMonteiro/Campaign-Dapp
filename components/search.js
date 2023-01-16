import React, { Component } from 'react';
import { Input, Menu, Icon } from 'semantic-ui-react';
import { Link } from '../routes';
import CampaignIndex, { fruit } from '../pages/index';

const Search = (props) => {

		return (

			<div style={{ width: '100%' }}>
				<Menu.Item>
					<Input
					className="icon" 
					icon="search" 
					placeholder="Search..."
					type="text"
					/>
				</Menu.Item>

			</div>
		)

}

export default Search;