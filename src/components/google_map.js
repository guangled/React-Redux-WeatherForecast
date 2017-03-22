/*
* @Author: guangled
* @Date:   2017-03-22 00:19:17
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-22 10:36:59
*/
import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		// this.refs.map
		return <div ref="map" />;
	}
}

export default GoogleMap;