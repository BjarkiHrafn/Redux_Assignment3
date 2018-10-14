import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import Swipeable from "react-native-swipeable";

const styles = StyleSheet.create({
  todoIterm: {
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
      checked: false
    };
  }

  onDelete = () => {
    // TODO: delete todo item using the ondelete function
  };

  onCheck = () => {
    // TODO: add checked to store
    this.setState({ checked: !this.state.checked });
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
            title="Click Here"
            checked={this.state.checked}
            onPress={() => this.onCheck()}
          />
        </Swipeable>
      </View>
    );
  }
}

export default todo;
