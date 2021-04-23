import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Linking, Modal, FlatList, TouchableOpacity } from 'react-native';
import data from './Data';

const App = () => {
  const [following, setFollowing] = useState(true);
  const [follower, setFollower] = useState(0);

  const renderItem = ({item}) =>{
    return(
      <View>
        <View style={styles.profileContentStyle}>
          <View style={styles.profileStyle}>
            <Image
              source={require('./assets/profile.jpg')}
              style={styles.pic}
            />
          </View>
          <View style={styles.profileText}>
            <Text style={{fontSize:22, paddingBottom: 5,}}>{item.name}</Text>
          <View>
            { following ? (
              <View style={styles.profileTextStyle}>
                <TouchableOpacity onPress={()=> (setFollowing(false), setFollower(follower+1))}>
                  <Text style={{fontSize:18, alignSelf: 'center', color: 'white'}}>Follow</Text>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.profileTextStyle1}>
                <TouchableOpacity onPress={()=>(setFollowing(true),setFollower(follower-1))}>
                  <Text style={{fontSize:18, alignSelf: 'center', color: 'white'}}>Following</Text>
                </TouchableOpacity>
              </View>
            )
            }
          </View>
          </View>
        </View>
        <View style={{padding:10}}>
          <Text style={{fontSize:16}}>instagram</Text>
          <Text style={{width: '80%'}}>{item.info}</Text>
          <Text>{item.urlinfo}</Text>
          <Text style={{color: 'blue', paddingBottom:10}}
          onPress={() => Linking.openURL(item.url)}>
         {item.website}</Text>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.userInfoText}>
            <Text>{item.posts.length}</Text>
            <Text style={{color: 'grey'}}>posts</Text>
          </View>
          <View style={styles.userInfoText}>
            <Text>{follower}</Text>
            <Text style={{color: 'grey'}}>followers</Text>
          </View>
          <View style={styles.userInfoText}>
            <Text>65</Text>
            <Text style={{color: 'grey'}}>following</Text>
          </View>
        </View>
        <View style={styles.postsStyle}> 
        {item.posts.map((list, key)=>( 
        <TouchableOpacity style={styles.postImageStyle} key={key}>
          <Image
            //key={key.imgid}
            source={list.img}
            style={{width: '100%', height: "100%"}}
          /> 
        </TouchableOpacity>
        )) }
        </View>
      </View>
    );
  };
  
  return(
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <View style={{padding:5,}}>
          <Text style={{fontSize: 28}}>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Text>
        </View>
        <View style={{padding:5, justifyContent: 'flex-end'}}>
          <TouchableOpacity>
            <Text style={{fontSize:18, paddingRight:5, color: '#0A64ED'}}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  headerStyle:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderBottomWidth: 2, 
    borderBottomColor: 'grey', 
  },
  profileContentStyle:{
    flexDirection: 'row',
  },
  pic: {
    borderRadius: 50,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'black'
  },
  profileStyle:{
    padding: 10,
  },
  profileText:{
    padding: 10,
    //justifyContent: 'center'
  },
  profileTextStyle:{
    borderRadius: 5,
    width: 80,
    backgroundColor: '#0491FF',
  },
  profileTextStyle1:{
    borderRadius: 5,
    width: 110,
    backgroundColor: '#B3B4B8',
  },
  userInfo:{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth:1,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
  },
  userInfoText:{
    alignItems: 'center'
  },
  postsStyle:{
    flexDirection: 'row',
    justifyContent:'flex-start',
    flexWrap: 'wrap',
    paddingBottom:5,
  },
  postImageStyle:{
    marginLeft:3,
    marginTop: 3,
    width:'32%',
    height:150,
  },
});

export default App;