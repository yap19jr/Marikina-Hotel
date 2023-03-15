import { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return(
            <>
            <Map
            google = {this.props.google}
            style = {{width:"100%", height:"100%", padding:"0 20px 0 20px "}}
            zoom = {10}
            initialCenter = {
              {
                  lat:14.638262,
                  lng:121.112422
              }
          }
      />              
            </>
      
    );
    }
}
export default GoogleApiWrapper({
    apikey:"AIzaSyAfwDqGqcGJmaV-8D-hXzREtF4yTxiquys"
})(MapContainer)