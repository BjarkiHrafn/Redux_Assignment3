import React from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

class addTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo: "", write: false, err: false};
  }

  onPressStart = () => {
    this.setState({write: !this.state.write});
  }

  onPressAdd = () => {
    this.setState({write: !this.state.write, err: false, todo: ""});

    this.props.dispatch({
      type: "ADD_TODO",
      payload: {task: this.state.todo, done: false}
    });
  }

  onError = () => {
    this.setState({err: true});
  }


  render() {
    if(this.state.write) {
      return(
        <View>
          {this.state.err ? <Text>hey i am an error, look at me!</Text> : null}
          <TextInput
            onChangeText = {todo => this.setState({todo})}
            value = {this.state.todo}
          />
          <Button
            title = "Add todo"
            onPress = {this.state.todo !== "" ? this.onPressAdd : this.onError}
          />
        </View>
      );
    } else {
      return(
        <View style = {styles.addTodos}   >
        <Text onPress = {this.onPressStart}>click me</Text>
        </View>
      );
    }

  }

}

const styles = StyleSheet.create({
  addTodos: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default connect()(addTodo);
