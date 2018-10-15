import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

class addTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo: ""};
  }

  render() {
    return(
      <View>
        <TextInput
          onChangeText = {todo => this.setState({todo})}
          value = {this.state.todo}
        />
        <Button
          title = "Add todo"
          onPress = {() => this.props.dispatch({
            type: "ADD_TODO",
            payload: this.state.todo
          })}
        />
      </View>
    );
  }

}
export default connect()(addTodo);
