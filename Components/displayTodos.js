import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import Todo from "./todo";

const styles = StyleSheet.create({
  todoListContainer: {
    flex: 1,
    alignSelf: "stretch"
  }
});

class addTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      <View style={[styles.todoListContainer]}>
        {todos.map(t => (
          <Todo todoItem={t.task} />
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(addTodo);
