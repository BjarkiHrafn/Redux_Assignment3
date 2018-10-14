import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';


class addTodo extends React.Component {

  render() {
    console.log("displayTodos", this.props);
    return(
      <View>
        <Text>
          Hello, {this.props.todo}
        </Text>
      </View>
    );
  }

}

const mapStateToProps = state => {
  return {todo: state.todo};
};

export default connect(mapStateToProps)(addTodo);
