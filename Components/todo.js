import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import Swipeable from "react-native-swipeable";
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  todoItem: {
    height: 100,
    alignSelf: "stretch"
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20
  }
});

class todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      todoItem: this.props.todoItem
    };
  }

  onDelete = () => {
    this.props.dispatch({
      type: "DELETE_TODO",
      payload: {task: this.state.todoItem.task, done: this.state.todoItem.done}
    });
  };

  onCheck = () => {
    // TODO: add checked to store
    //this.setState({ checked: !this.state.checked });
    this.props.dispatch({
      type: "UPDATE_DONE_TODO",
      payload: {task: this.state.todoItem.task, done: this.state.todoItem.done}
    })
  };

  render() {

    return (
      <View style={styles.todoIterm}>
        <Swipeable
          rightButtons={[
            <TouchableOpacity
              onPress={() => this.onDelete()}
              style={[styles.rightSwipeItem, { backgroundColor: "red" }]}
            >
              <Text>delete</Text>
            </TouchableOpacity>
          ]}
        >
          <CheckBox
            title={this.props.todoItem.task}
            checked={this.props.todoItem.done}
            onPress={() => this.onCheck()}
          />
        </Swipeable>
      </View>
    );
  }
}

export default connect()(todo);
