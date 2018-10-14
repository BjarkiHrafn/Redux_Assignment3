import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';


class addTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo: ""};
  }

  render() {
    return(
      <View>
        <Text>
          {this.props.todos}
        </Text>
      </View>
    );
  }

}

const mapStateToProps = state => {
  return {todo: state.todo};
};

export default connect(mapStateToProps)(addTodo);
