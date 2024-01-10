import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DATAS } from '../data/callData';

interface CallsProps { }

const Calls = (props: CallsProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Call link button */}
        <TouchableOpacity>
          <View style={styles.linkContainer}>
            <View style={styles.linkIcon}>
              <Ionicons name='link-sharp' size={30} color='white' />
            </View>
            <View style={styles.linkTxtContainer}>
              <Text style={styles.txt1}>Create call link</Text>
              <Text>Share a link for your Whatsapp call</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* Recent text */}
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Recent</Text>
        </View>
        {/* FlatList */}
        <FlatList
          data={DATAS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <View style={styles.personContainer}>
                {/* Image container */}
                <TouchableOpacity>
                  <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.image} />
                  </View>
                </TouchableOpacity>
                {/* Text Container */}
                <View style={styles.txtNameContainer}>
                  <View style={styles.nameAndCallCountsCounter}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>{item.callCounts}</Text>
                  </View>
                  <View style={styles.dateAndTimecontainer}>
                    <MaterialCommunityIcons name='call-received' size={17} color='green'/>
                    <Text>{item.date}</Text>
                    <Text>{item.time}</Text>
                  </View>
                </View>
                {/* Icon Container */}
                <TouchableOpacity>
                  <View>
                    <MaterialIcons name='call' size={23} color='#128C7E' />
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  txtContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  txt: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15
  },
  linkIcon: {
    backgroundColor: '#128C7E',
    marginRight: 15,
    padding: 10,
    borderRadius: 50
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 15
  },
  linkTxtContainer: {
    paddingTop: 5
  },
  txt1: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400'
  },
  personContainer: {
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  imageContainer: {
    paddingBottom: 25,

  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100
  },
  txtNameContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  name: {
    fontSize: 18,
    color: 'black',
  },

  nameAndCallCountsCounter: {
    display: 'flex',
    flexDirection: 'row'
  },
  dateAndTimecontainer: {
    display: 'flex',
    flexDirection: 'row',
  },

});
