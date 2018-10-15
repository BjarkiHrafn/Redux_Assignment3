import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';


class addTodo extends React.Component {

  render() {
    console.log("displayTodos", this.props);
    return(
      <View>
        <Text>
          Hello, {this.props.todos.length > 0 ? this.props.todos[0] : "empty" }
        </Text>
      </View>
    );
  }

}

const mapStateToProps = state => {
  return {todos: state.todos};
};

export default connect(mapStateToProps)(addTodo);
