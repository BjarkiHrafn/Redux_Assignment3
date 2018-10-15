import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import Todo from "./todo";

let {width, height} = Dimensions.get('window');
let realHeight = height/2;
const styles = StyleSheet.create({

  todoListContainer: {
    alignSelf: "stretch",
    minHeight: 200,
    maxHeight: realHeight
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
