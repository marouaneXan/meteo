import React, { useState } from "react";
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import Loading from "../components/loading";

const RegisterPage = () => {
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
    console.log(formData)
  }

  return (
    <ImageBackground
      source={require("../images/weather.webp")}
      style={styles.background}
    >
      <View style={styles.container}>
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
        <Loading/>
        <TouchableOpacity style={styles.button}>
          <Button style={styles.buttonText} title='Register' onPress={onSubmit} />
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
});

export default RegisterPage;

