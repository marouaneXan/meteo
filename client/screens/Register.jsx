import React, { useContext, useState } from "react";
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from "react-native";
import Loading from "../components/loading";
import { AuthContext } from "../context/auth";
import { useNavigation } from '@react-navigation/native';

const RegisterPage = () => {
  const navigation=useNavigation()
  const { loading, register, success } = useContext(AuthContext)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password } = formData
  const onChange = (field, text) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: text,
    }))
  }

  const onSubmit = () => {
    if (!name || !email || !password) {
      setError('Please fill al fields');
      setTimeout(() => {
        setError(null)
      }, 2000)
    }
    else register(formData,navigation)
  }

  return (
    <ImageBackground
      source={require("../images/weather.webp")}
      style={styles.background}
    >
      <View style={styles.container}>
        {error && (
          <View style={styles.errorView}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        {success && (
          <View style={styles.successView}>
            <Text style={styles.successText}>{success}</Text>
          </View>
        )}
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => onChange("name", text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => onChange("email", text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => onChange("password", text)}
          value={password}
        />
        <TouchableOpacity style={styles.button}>
          <Button style={styles.buttonText} title={loading ? <Loading /> : 'Register'} onPress={onSubmit} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 50,
    marginBottom: 20,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10
  },
  button: {
    backgroundColor: "#0099ff",
    padding: 10,
    borderRadius: 10,
    alignSelf: "stretch",
    marginTop: 6,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
  errorView: {
    padding: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.4);',
    borderRadius: 6
  },
  errorText: {
    color: 'white',
    textAlign: 'center'
  },
  successView: {
    padding: 10,
    backgroundColor: 'rgba(0, 255, 0, 0.4);',
    borderRadius: 6
  },
  successText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default RegisterPage;

