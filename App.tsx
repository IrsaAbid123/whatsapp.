import * as React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import Header from './web/screens/Header';
import Navigation from './web/navigation/Navigation';

interface AppProps { }


const App = (props: AppProps) => {
  return (
    
      <View style={styles.container1}>
        
        {/* Green Header */}
          <StatusBar backgroundColor={'#128C7E'} barStyle={'light-content'} />
          <Header/>
        {/* Navigation */}
        <View style={styles.container2}>
          <Navigation />
        </View>
      </View>
    
  );
};

export default App;

const styles = StyleSheet.create({
  container1: {
     flex: 1,
  },
  container2: {
flex: 1,
  }
});