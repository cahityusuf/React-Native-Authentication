import React, { useState,useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Feather } from "@expo/vector-icons";
import { Context as AuthContext} from "../context/AuthContext"

const SignupScreen = ({ navigation }) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>

      <Input
        label="Email"
        leftIcon={() => {
          return <Feather style={styles.icon} name="mail" />;
        }}
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        leftIcon={() => {
          return <Feather style={styles.icon} name="lock" />;
        }}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Spacer>
        <Button title="Sign Up" onPress={()=>signup({email,password})} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    fontSize: 24,
  },
  container: {
    marginTop: 100
  },
});

export default SignupScreen;
