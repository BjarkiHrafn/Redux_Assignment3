import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AddTodos from './Components/addTodo';
import DisplayTodos from './Components/displayTodos';



export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <AddTodos/>
          <DisplayTodos/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
