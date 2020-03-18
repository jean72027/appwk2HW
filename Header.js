import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return ( 
    <View>
      <View style={styles.headerstyle}>
        <Text style={styles.headertext}>A L B U M S</Text>
      </View> 
    </View>
    )
};

const styles = StyleSheet.create({


    headerstyle:{
      backgroundColor:'#424158',
      justifyContent: 'center',
      alignItems:'center',
      height:90,
      paddingTop:30,
    },

    headertext:{
        fontSize:25,
        fontWeight:"bold",
        color:"white",
      },       
});

export default Header;        