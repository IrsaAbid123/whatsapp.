import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

interface IconsProps {}

const Icons = (props: IconsProps) => {
  return (
    <View style={styles.container}>
      <Entypo
              name="lock"
              size={24}
              color="gray"
              style={{ marginRight: 15 }}
            />
            <TouchableOpacity>
      <Entypo
              name="dots-three-vertical"
              size={24}
              color="gray"
              style={{ marginRight: 15 }}
            />
            </TouchableOpacity>
    </View>
  );
};

export default Icons;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'row'
  }
});
