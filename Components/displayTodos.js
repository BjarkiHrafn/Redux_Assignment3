import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import Todo from "./todo";

const styles = StyleSheet.create({
  todoListContainer: {
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
      <ScrollView style={[styles.todoListContainer]}>
        {todos.map((t, i) => (
          <Todo key={i} todoItem={t} />
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(addTodo);
