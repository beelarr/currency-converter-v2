import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image
      style={styles.containerImage}
      source={require("./images/background.png")}
    >
      <Image styles={styles.logoImage} source={require("./images/logo.png")} />
    </Image>
    <Text>Currency Converter</Text>
  </View>
);

export default Logo;
