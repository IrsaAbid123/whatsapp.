import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { DATAS } from '../data/channelsData'
import { DATA } from '../data/updateData';

interface UpdatesProps { }

const Updates = (props: UpdatesProps) => {
  const [statusData, setStatusData] = useState(DATA)

  useEffect(() => {
    setStatusData(DATA)
  }, [])

  const combineStatusData = [
    { title: 'Recent Updates', data: statusData.filter(item => item.viwed === false) },
    { title: 'Viwed Updates', data: statusData.filter(item => item.viwed === true) }
  ]
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Status text container */}
        <View style={styles.textContainer}>
          <Text style={styles.statusText}>Status</Text>
          <Entypo name='dots-three-vertical' size={20} color='black' />
        </View>
        {/* My status View */}
        <View style={styles.myStatusContainer}>
          <Image style={styles.image} source={require('../assets/images/blackpfp.jpg')} />
          <View style={styles.txtContainer}>
            <Text style={styles.txt1}>My status</Text>
            <Text>Tap to add my status update</Text>
          </View>
        </View>
        {/* Flatelist */}
        <FlatList
          data={combineStatusData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.viewUpdates}>{item.title}</Text>
              {/* Flatelist to add the data for viwed list and recent list separately */}
              <FlatList
                data={item.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.statusContainer}>
                    {/* Image container */}
                    <View style={styles.statusImageContainer}>
                      <Image source={item.image} style={styles.statusImage} />
                    </View>
                    {/* Text container */}
                    <View style={styles.statusTextcontainer}>
                      <Text style={styles.statusText1}>{item.name}</Text>
                      <Text>{item.time}</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          )}
        />
        {/* Channels container */}
        <View style={styles.channelsContainer}>
          {/* View for line */}
          <View style={styles.line} />
          {/* View for Channel text and icon */}
          <View style={styles.channeltxtContainer}>
            <Text style={styles.channeltxt}>Channels</Text>
            <Entypo name='plus' size={25} color='black' />
          </View>
        </View>
        <View>
          <Text>Stay focuced on the topics that metter you. Find the channels to follow below.</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <FlatList
              data={DATAS}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.imgContainer}>
                  <Image source={item.image} style={styles.imageContainer} />
                  <View style={styles.imageTextContainer}>
                    <Text style={styles.imageText}>{item.name}</Text>
                  </View>
                  <View>
                  <TouchableOpacity style={styles.followButton}>
                      <Text style={styles.followButtonText}>Follow</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
        <View style={styles.ExpMoreContainer}>
          <TouchableOpacity >
            <Text style={styles.ExpMoreText}>Explore more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Updates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statusText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'
  },
  myStatusContainer: {
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 200,
    marginRight: 10
  },
  txt1: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500'
  },
  txtContainer: {
    paddingTop: 3
  },
  viewUpdates: {
    fontWeight: '500'
  },
  statusImageContainer: {
    paddingBottom: 20
  },
  statusImage: {
    width: 55,
    height: 55,
    borderRadius: 200
  },
  statusContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  statusTextcontainer: {
    marginLeft: 10,
    paddingTop: 10
  },
  statusText1: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 3
  },
  channelsContainer: {
    position: 'relative',
    flex: 1,
    paddingVertical: 20,
  },
  line: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
  },
  channeltxtContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  channeltxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'
  },
  imgContainer: {
    marginTop: 20,
    paddingTop: 10,
    display: 'flex',
    borderWidth: 0.5,
    borderRadius: 15,
    marginLeft: 15,
    borderColor: 'gray',
    height: 180,
    width: 130,
    alignItems: 'center'
  },
  imageContainer: {
    margin: 5,
    height: 55,
    width: 55,
    borderRadius: 100,
  },
  imageText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20
  },
  imageTextContainer: {
    marginVertical: 10,
  },
  followButton:{
    backgroundColor: '#9AE4D5',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 60
  },
followButtonText:{
   color: '#128C7E',
   fontSize: 15,
   fontWeight: '600'
},
ExpMoreContainer: {
  backgroundColor: '#128C7E',
  borderRadius: 50,
  paddingVertical: 16,
  paddingHorizontal: 25,
  marginRight: '60%',
  alignItems: 'center',
  marginTop: 30,
},
ExpMoreText: {
  color: 'white',
  fontWeight: '600',
  textAlign: 'center', 
},
});
