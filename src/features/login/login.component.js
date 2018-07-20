import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { requestLogin } from './login.actions';

const mapStateToProps = state => ({
  fetch: state.login.fetch,
  data: state.login.data,
  error: state.login.error,
});

const mapDispatchToProps = dispatch => ({
  requestLogin: () => dispatch(requestLogin()),
});

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Text style={styles.titleLogin}>Login App</Text>
          <TextInput style={styles.inputText} keyboardType="email-address" placeholder="Email" onChangeText={value => this.setState({ email: value })} />
          <TextInput style={styles.inputText} secureTextEntry={true} placeholder="Password" onChangeText={value => this.setState({ password: value })} />
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {
              this.props.requestLogin();
            }}
          >
            <Text style={[styles.titleLogin, { color: '#fff', marginBottom: 0, fontSize: 18 }]}>Login</Text>
          </TouchableOpacity>
          {
            this.props.error
              ? <Text style={[styles.titleLogin, { color: 'red', marginTop: 20, fontSize: 13 }]}>{this.props.error}</Text>
              : <View />
          }
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
  },
  loginForm: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLogin: {
    marginBottom: 35,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  inputText: {
    width: '100%',
    height: 50,
    borderColor: '#3b5998',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: '5%',
  },
  buttonLogin: {
    width: '100%',
    height: 50,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
});
