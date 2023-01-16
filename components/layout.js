import React from 'react';
import { Container, Menu, Input } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Search from './search';


const Layout = (props) => {
	return(
		<Container>
			<Head>
				<link
					rel="stylesheet" 
					href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
				/>
			</Head>
			
			<Header>	
			</Header>
			{props.children}
			<Footer />

		</Container>

	);
};

export default Layout;