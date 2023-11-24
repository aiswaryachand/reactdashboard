import React from 'react';
import Navbar from './Navbar';
import SalesInfo from './salesinfo';
import Table from './table';

function dashboard() {
	return (
		<>
			<div className='container'>
				<Navbar />
				<SalesInfo />
				<Table />
			</div>
		</>
	);
}

export default dashboard;