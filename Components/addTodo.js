import React from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
//import moment from 'moment';

class addTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo: "", write: false, err: false, date: "2019-10-15"};
  }

  onPressStart = () => {
    this.setState({write: !this.state.write});
  }

  onPressAdd = () => {
    this.setState({write: !this.state.write, err: false, todo: ""});

    this.props.dispatch({
      type: "ADD_TODO",
      payload: {task: this.state.todo, done: false, date: this.state.date}
    });
  }

  onError = () => {
    this.setState({err: true});
  }


  render() {
    if(this.state.write) {
      return(
        <View style = {styles.container}>
          <View style={styles.inputContainer}>
            {this.state.err ? <Text style = {styles.errMsg}>Please insert text before adding a todo!</Text> : null}
            <TextInput style = {styles.input}
              onChangeText = {todo => this.setState({todo})}
              value = {this.state.todo}
            />

          <DatePicker
             style={{width: 200}}
             date={this.state.date}
             mode="date"
             placeholder="select date"
             format="YYYY-MM-DD"
             minDate="2019-10-15"
             maxDate="2019-12-31"
             confirmBtnText="Confirm"
             cancelBtnText="Cancel"
             customStyles={{
               dateIcon: {
                 position: 'absolute',
                 left: 0,
                 top: 4,
                 marginLeft: 0
               },
               dateInput: {
                 marginLeft: 36
               }
               // ... You can check the source to find the other keys.
             }}
             onDateChange={(date) => {this.setState({date: date})}}
           />
           </View>
          <Button style = {styles.buttn}
            title = "Add todo"
            onPress = {this.state.todo !== "" ? this.onPressAdd : this.onError}
          />
        </View>
      );
    } else {
      return(
        <View style = {styles.addTodos}   >
        <Text onPress = {this.onPressStart}>click me</Text>
        </View>
      );
    }

  }

}

const styles = StyleSheet.create({
  container: {
    height: 150
  },
  addTodos: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  errMsg: {
    color: "red",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttn: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 70,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
  },
  inputContainer: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1
  }
});
export default connect()(addTodo);
