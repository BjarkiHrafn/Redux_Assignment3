import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import AddTodos from "./Components/addTodo";
import DisplayTodos from "./Components/displayTodos";

export default class App extends React.Component {
  render() {
    return (

        <Provider store={store}>
          <View style = {styles.con2}>
            <Image resizeMode={'cover'} style = {styles.img} source = {require('./assets/postIt.jpg')}></Image>
            <View style={styles.container} >

                <AddTodos />
                <DisplayTodos />

              </View>
          </View>
        </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    top: 50,
    bottom: 50 ,
    alignItems: "center",
    justifyContent: "center"
  },
  con: {
    flex: 1
  },
  img: {
    position: "relative",
    height: 150

  }
});
