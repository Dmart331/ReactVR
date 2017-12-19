import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Model
            
            style = {{
                transform: [
                    {translate: [0, -2 , -5]},
                    {scale: 1},
                    ],
            }}
//texture={asset("moon.jpg")}

source={{obj:asset('Ship.obj'), mtl:asset('Ship.mtl')}}
    lit = {false} />     
</View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
