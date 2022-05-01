import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg"
  };


  return (
    <View style={styles.container}>
      <Image
        style={styles.localCSULogo}
        source={require('./assets/logo.jpg')}
      />
      <Image
       style={styles.urlCSULogo}
       sources={{
         uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg"
       }}
       />

       <Image 
       style={styles.stretchLogo}
       source={csuLogo} />

       </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  localCSULogo: {
    width: 55,
    height: 65,
  },
  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretch: {
    
    height: 200,
    resizeMode: 'center'

  }

});



//
// import React from 'expo-status-bar';
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// export default function App() {

//   const csuLogo = {
//     uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg"
//   }


//   return (
//     <View style={styles.container}>
//       <ImageBackground source={csuLogo} style={styles.image}></ImageBackground>

//         <Text style={style.text}> CSU Logo</Text>
      

//        </View>
  
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
  
//   text: {
//     color: ReactDOM,
//     fontSize: 40,
//     fontWeight: 'bold'
//   }

// });
