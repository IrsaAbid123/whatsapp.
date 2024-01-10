import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

interface HelpArticleProps {}

const HelpArticle = (props: HelpArticleProps) => {
  return (
    <View style={styles.container}>
      {/* About Community Section */}
      <View style = {{backgroundColor: 'red'}}>
        <Text>
          About communities on Whatsapp
        </Text>
      </View>

      {/* Communities on whatsapp bring members */}
      <View style = {styles.largeSize}>
        <Text>
          Communities on Whatsapp brings members together in topic-based groups.
        </Text>
      </View>

      {/* Green text */}
      <View>
        <Text>
          How you can use communities
        </Text>
      </View>

      {/* Three steps text */}
      <View>
        {/* First step */}
        <Text>
          <Entypo name='dot-single' size={20} color='black'/>
          Create a community:
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium itaque ab doloribus accusantium repudiandae dicta, magni mollitia molestias temporibus, delectus laborum dolorem quo repellat assumenda consectetur reprehenderit, aspernatur explicabo! Quidem magnam nam doloremque perspiciatis minima. Id blanditiis ducimus ea.</Text>
        </Text>

        {/* Second step */}
        <Text>
          <Entypo name='dot-single' size={20} color='black'/>
          Add or join groups:
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium itaque ab doloribus accusantium repudiandae dicta, magni mollitia molestias temporibus, delectus laborum dolorem quo repellat assumenda consectetur reprehenderit</Text>
        </Text>

        {/* Third step */}
        <Text>
          <Entypo name='dot-single' size={20} color='black'/>
          Add or join groups:
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium itaque ab doloribus accusantium repudiandae dicta, magni mollitia molestias temporibus, delectus laborum dolorem quo repellat assumenda consectetur reprehenderit</Text>
        </Text>
      </View>
    </View>
  );
};

export default HelpArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  largeSize:{
    color: 'black',
    fontSize: 20
  }
});
