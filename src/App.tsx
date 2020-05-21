import React from 'react';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    minWidth: 400,
    minHeight: 800,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button title="Hello world" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
