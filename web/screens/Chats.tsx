import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ChatRoom from './ChatRoom';
import { DATA } from '../data/chatData';

interface ChatsProps { }

const Chats = (props: ChatsProps) => {

  const [chatData, setChatData] = useState(DATA);
  const navigation = useNavigation();

  useEffect(() => {
    setChatData(DATA)
  })

  return (
    <ScrollView>
      <View>
        {/* archived Chat */}
        <TouchableOpacity>
          <View style={styles.archive}>
            <MaterialIcons name='archive' size={25} color='#128C7E' />
            <Text style={styles.archivedTxt}>Archived</Text>
          </View>
        </TouchableOpacity>
        {/* FlateList */}
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ChatRoom')}>
              <View style={styles.container}>
                <TouchableOpacity>
                  <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.messageContainer}>
                  <View>
                    <Text style={styles.nameTxt}>{item.name}</Text>
                    <Text>{item.lastMessage}</Text>
                  </View>
                  <View style={styles.timeAndMessageCount}>
                    <Text style={styles.timetxt}>{item.time}</Text>
                    <Text style={styles.messageCounttxt}>{item.messageCount}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Chats;


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row'
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 100
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 15
  },
  nameTxt: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500'
  },
  timeAndMessageCount: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 8
  },
  timetxt: {
    color: '#25D366'
  },
  messageCounttxt: {
    paddingRight: 8,
    backgroundColor: '#25D366',
    borderRadius: 50,
    overflow: 'hidden',
    paddingHorizontal: 6,
    color: 'white',
  },
  archive: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  archivedTxt: {
    color: 'black',
    alignItems: 'center',
    marginLeft: 25,
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 2
  }

});
