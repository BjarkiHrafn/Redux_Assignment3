import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

class addTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  render() {
    console.log(this.props.todos);
    return (
      <View>
        <Text>
          Hello, {this.props.todos.length > 0 ? this.props.todos[0].task : "empty" }
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {todos: state.todos};
};

export default connect(mapStateToProps)(addTodo);
