import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


const AlbumLists = () => {
    return ( 
<ScrollView>
    <View>  
      <View style={styles.albumbgcolor}>
        <View style={styles.albumcon}>
          <View style={styles.albumtitle}>
            <Image style={styles.singerpicstyle} source={require("./img/aimer.jpg")} />
            <View style={styles.albumtitletext}>
              <Text style={styles.albumname}>"Day dream"</Text>
              <Text> Aimer</Text>
            </View>
          </View>
          <View style={styles.albumpicspace}>
          <Image style={styles.albumpicstyle} source={require("./img/kataomoi.jpg")} />
          </View>
          
        </View>
      
        <View style={styles.albumcon}>
          <View style={styles.albumtitle}>
            <Image style={styles.singerpicstyle} source={require("./img/aimer.jpg")} />
            <View style={styles.albumtitletext}>
              <Text style={styles.albumname}>"Dawn"</Text>
              <Text> Aimer</Text>
            </View>
          </View>
          <View style={styles.albumpicspace}><Image style={styles.albumpicstyle} source={require("./img/dawn.jpg")} /></View>
          
        </View>
      
        <View style={styles.albumcon}>
          <View style={styles.albumtitle}>
            <Image style={styles.singerpicstyle} source={require("./img/aimer.jpg")} />
            <View style={styles.albumtitletext}>
              <Text style={styles.albumname}>"Penny Rain"</Text>
              <Text> Aimer</Text>
            </View>
          </View>
          <View style={styles.albumpicspace}><Image style={styles.albumpicstyle} source={require("./img/pennyrain.jpg")} /></View>
        </View>
      
        <View style={styles.albumcon}>
          <View style={styles.albumtitle}>
            <Image style={styles.singerpicstyle} source={require("./img/aimer.jpg")} />
            <View style={styles.albumtitletext}>
              <Text style={styles.albumname}>"Torches"</Text>
              <Text> Aimer</Text>
            </View>
          </View>
          <View style={styles.albumpicspace}><Image style={styles.albumpicstyle} source={require("./img/torches.jpg")} /></View>
        </View>
      
        <View style={styles.albumcon}>
          <View style={styles.albumtitle}>
            <Image style={styles.singerpicstyle} source={require("./img/aimer.jpg")} />
            <View style={styles.albumtitletext}>
              <Text style={styles.albumname}>"I Beg You"</Text>
              <Text> Aimer</Text>
            </View>
          </View>
          <View style={styles.albumpicspace}><Image style={styles.albumpicstyle} source={require("./img/ibegu.jpg")} /></View>
        </View>
      
        </View>
      </View>  
</ScrollView> 
    );    
};

const styles = StyleSheet.create({

    albumbgcolor:{
      backgroundColor:"#BBB1BF",
    },
          
            headerstyle:{
              backgroundColor:'#424158',
              justifyContent: 'center',
              alignItems:'center',
              height:90,
              paddingTop:30,
    },

      
      albumcon:{
        // borderWidth:1,
        // borderRadius:2,
        // borderColor:"#ddd",
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        marginLeft:5,
        marginRight:5,
        marginTop:15,
        flexDirection:"column",
        justifyContent:"flex-start",
      },
    
      singerpicstyle:{
        height:50,
        width:50,
        marginRight:10,
      },
    
      albumpicstyle:{
        height:380,
        width:380,
        
      },
      albumpicspace:{
        borderWidth:1,
        borderRadius:5,
        borderColor:"#ddd",
        marginTop:2,
        padding:10,
      },
    
     albumtitle:{
        borderWidth:1,
        borderRadius:5,
        borderColor:"#ddd",
        padding:8,
        flexDirection:"row",
        justifyContent:"flex-start",
      },
    
      albumtitletext:{
        flexDirection:"column",
        justifyContent:"flex-start",
      },
    
      albumname:{
        fontWeight:"bold",
        marginBottom:4,
      },
            
});

export default AlbumLists;