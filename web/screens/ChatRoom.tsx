import React from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList, ScrollView } from 'react-native';
import { DATA } from '../data/chatRoomData';
import Input from './Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface ChatRoomProps { }

const ChatRoom = (props: ChatRoomProps) => {

  const userOneMessages = DATA.filter((item) => item.user === 1);

  return (
    <ImageBackground
      source={require('../assets/images/whatsapp2.jpg')}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.enscriptionContainer}>
            <Text style={styles.enscriptionText}>
              <FontAwesome name='lock' size={13} color='gray' />
              Messages and calls are end-to-end encryted.No one outside of this chat, not even Whatsapp, can read or liten to them.Tap to learn more.
            </Text>
          </View>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={[
                styles.messageContainer,
                {
                  backgroundColor: item.user === 1 ? '#DCF8C6' : 'white',
                  alignSelf: item.user === 1 ? 'flex-end' : 'flex-start',
                }
              ]}>
                <Text style={styles.messagetext}>{item.message}</Text>
                <View style={styles.messagetime}>
                  <Text>{item.time}</Text>
                </View>
              </View>
            )}
            inverted
          />
        </View>
      </ScrollView>
      <Input/>
    </ImageBackground>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  messageContainer: {
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  messagetext: {
    color: 'black',
    fontSize: 15,
  },
  messagetime: {
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingTop: 10,
    marginLeft: 10
  },
  enscriptionContainer: {
    backgroundColor: '#ffebcd',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 9
  },
  enscriptionText: {
    textAlign: 'center'
  }
});
