import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'

interface HeaderProps { }

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Whatsapp text */}
      <View>
        <Text style={styles.maintxt}>Whatsapp</Text>
      </View>

      {/* Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Feather size={20} color='white' name='camera' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerIcon}>
          <Feather size={20} color='white' name='search' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo size={20} color='white' name='dots-three-vertical' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#128C7E',
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  maintxt:{
    color: 'white',
    fontSize: 25,
  },
  iconContainer:{
    flexDirection: 'row',
  },
  centerIcon:{
    paddingHorizontal: 20,
  }
});