import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import rootStore from "./store";
import AddTodos from "./Components/addTodo";
import DisplayTodos from "./Components/displayTodos";
//import { name as appName } from './app.json';

import Todo from "./Components/todo";

const store = rootStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <AddTodos />
          <DisplayTodos />
          <Todo />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
