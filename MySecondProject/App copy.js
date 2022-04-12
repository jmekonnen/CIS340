import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {

  function getFullName(fname, mName, lName) {
    return fname + " " + mName + " " + lName;
  }

  const pet = "Dog";
  return (

    <Text>
    {"\n\n\n\n\n\n"}
      Hellr, I am a student in CIS340! {"\n"} getFullName(fname: any, mName: any, lName: any): string
      My full name is {getFullName("Josh", "Mesfin", "Mekonnen")} {"\n"}
      I have a {pet}!
    </Text>

  );
}
