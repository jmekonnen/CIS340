import React from 'react';
import { Text, Image, scrollView } from 'react-native'


    const dog = {
      uri: 'https://www.seekpng.com/png/detail/877-8776055_happy-dogs-dog-clipart.png',
      width: 64,
      height: 64
    }

    export default MyScrollViewApp = () => (
      
      <ScrollView style={{padding: 40}}>
      <Text style = {{fontSize: 80}}> Try to scroll down </Text>

      <Image source={require('./assets/dog2.png')} style={{width: 64, height: 64}} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down again, if you like</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />

    </ScrollView>
    );



