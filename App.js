import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ButtonComponent from "./components/ButtonComponent";
import { Provider as PaperProvider, Snackbar } from "react-native-paper";
import Lists from "./components/Lists";

export default function App() {
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);
  return (
    <PaperProvider>
      <View style={styles.appContainer}>
        {/* <ScrollView style={{ height: "100%", flex: 1, display: "flex" }}> */}
        <ButtonComponent setVisible={setVisible} />
        <Lists />

        {/* </ScrollView> */}
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Undo",
            onPress: () => {
              // Do something
            },
          }}
        >
          Button Clicked!
        </Snackbar>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // height: "200%",
  },
});
