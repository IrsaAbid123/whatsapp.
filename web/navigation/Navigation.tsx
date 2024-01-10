import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cummunity from '../screens/Cummunity';
import Chats from '../screens/Chats';
import Updates from '../screens/Updates';
import Calls from '../screens/Calls';
import ChatRoom from '../screens/ChatRoom';
import HelpArticle from '../screens/HelpArticle';
import Entypo from 'react-native-vector-icons/Entypo'
import Icons from '../Icons';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='MyChats'
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#128C7E'
          },
          tabBarLabelStyle: {
            fontWeight: 'bold'
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'white'
          },
          tabBarActiveTintColor: 'white',
        }}>
        <Tab.Screen
          name="MyStack"
          component={MyStack}
          options={{
            tabBarIcon: ({ }) => (
              <MaterialCommunityIcons name="account-group" color={'white'} size={25} />
            ),
            tabBarLabelStyle: styles.tabBarLabel1,
          }}
        />
        <Tab.Screen name="MyChats" component={MyChats} options={{ tabBarLabel: 'Chats' }} />
        <Tab.Screen name="Updates" component={Updates} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cummunity" component={Cummunity} options={{ headerShown: false }} />
      <Stack.Screen
        name="HelpArticle"
        component={HelpArticle}
        options={{
          title: 'About communities on Whatsapp',
          headerTitleStyle: {
            color : 'gray',
            fontWeight: '600',
            paddingBottom: 20,
            fontSize: 15,
          },
          headerRight: () => (
            <Icons/>
          ),
        }}
      />

    </Stack.Navigator>
  );
}
function MyChats() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default Navigation;


const styles = StyleSheet.create({
  tabBarLabel1: {
    display: 'none'
  }
});
