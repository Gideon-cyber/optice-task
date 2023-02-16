import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Snackbar } from "react-native-paper";

const ButtonComponent = ({ setVisible }) => {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => setVisible(true)}>
        Click Me!
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // height: "200%",
  },
});

export default ButtonComponent;
