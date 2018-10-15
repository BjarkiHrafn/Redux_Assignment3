import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import Swipeable from "react-native-swipeable";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  todoItem: {
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
      todoItem: this.props.todoItem
    };
  }

  onDelete = () => {
    this.props.dispatch({
      type: "DELETE_TODO",
      payload: {
        task: this.state.todoItem.task,
        done: this.state.todoItem.done,
        date: this.state.todoItem.date
      }
    });
  };

  onCheck = () => {
    this.props.dispatch({
      type: "UPDATE_DONE_TODO",
      payload: {
        task: this.state.todoItem.task,
        done: this.state.todoItem.done,
        date: this.state.todoItem.date,
      }
    });

    this.setState({ todoItem: this.props.todoItem });
  };

  render() {
    console.log("renedring");
    return (
      <View style={styles.todoItem}>
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
            title={this.props.todoItem.task + " - " + this.props.todoItem.date}
            checked={this.state.todoItem.done}
            onPress={() => this.onCheck()}
          />
        </Swipeable>
      </View>
    );
  }
}

export default connect()(todo);
