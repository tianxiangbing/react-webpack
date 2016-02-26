import React from 'react';
export default class Hello extends React.Component{
	render(){
		return (
			<div>hello world.
			{this.props.children}
			</div>
			);
	}
}

