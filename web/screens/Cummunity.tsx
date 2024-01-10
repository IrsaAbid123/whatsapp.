import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

interface CummunityProps { }

const Cummunity = (props: CummunityProps) => {
  const navigation = useNavigation()
  // States for underline
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  //  Stylesheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingTop: 25,
    },
    img: {
      height: 150,
      width: 150,
    },
    communitytxt: {
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10
    },
    communitytxts: {
      color: 'black',
      textAlign: 'center',
      fontSize: 15,
      marginBottom: 2

    },
    txt: {
      marginTop: 20,
      marginBottom: 5
    },
    exampletxt: {
      color: '#128C7E',
      fontSize: 15,
      textDecorationLine: isPressed ? 'underline' : 'none',
    },
    greaterThan: {
      fontSize: 20,
      paddingTop: 6
    },
    starting: {
      backgroundColor: '#128C7E',
      color: 'white',
      marginTop: 50,
      padding: 12,
      width: 250,
      fontSize: 15,
      textAlign: 'center',
      borderRadius: 100,
      fontWeight: 'bold'
    }
  });

  return (
    <View style={styles.container}>
      {/* Image  */}
      <View>
        <Image source={require('../assets/images/community.png')} style={styles.img} />
      </View>
      {/* Random texts */}
      <View style={styles.txt}>
        <Text style={styles.communitytxt}>Stay connected with the community</Text>
        <Text style={styles.communitytxts}>Community bring memebers together in topic-based</Text>
        <Text style={styles.communitytxts}> groups, and make it easy to get admin announcements.</Text>
        <Text style={styles.communitytxts}>Any community you're added to will appear here </Text>
      </View>
      {/* Examples link */}
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => navigation.navigate('HelpArticle')}
      >
        <Text style={styles.exampletxt}>
          See example communities{' '}
          <Text style={styles.greaterThan}>&gt;</Text>
        </Text>
      </TouchableOpacity>
      {/* Button for starting a community */}
      <TouchableOpacity>
        <Text style={styles.starting}>Start your community</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Cummunity;
