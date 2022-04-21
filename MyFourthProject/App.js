import React from 'react';
import { Text, View, SectionList } from 'react-native'


    export default statesApp = () => {
        return(
          <View style={{flex: 1, paddingTop:22}}>
            <SectionList
              sections={[
                {title: 'A', data: ['Alabama','alaska','Arizona','Arkansas']},
                {title: 'C', data: ['California','Colorado','Connecticut']},
                {title: 'D', data: ['Delaware']},
                {title: 'F', data: ['Florida']},
                {title: 'G', data: ['Georgia']},
                {title: 'H', data: ['Hawaii']},




              ]}
              renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44,}}> {item} </Text>}
              renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10, 
              paddingRight: 10,
              paddinfontSize: 14,
              fontWeight: 'bold',
              backgroundColor: '#9FA8DF',}}>{section.title}</Text>}
              keyExtractor={(item,index) =>index}
            
            
            />
          </View>

            

        );
            
  }

