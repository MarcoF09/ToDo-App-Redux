import { StyleSheet } from "react-native";
import { Colors } from "../../colors/Colors";

export const styles = StyleSheet.create({
  primaryText: {
    lineHeight: 54,
    fontSize: 24,
    color: Colors.black,
    fontFamily: "SourceSansPro-Regular"
  },
  headerText: {
    color: "white",
    fontSize: 17,
    lineHeight: 20
  },
  headerRightContainer: {
    width: 25,
    height: 20
  },
  headerLeftContainer: { width: 100, height: 20, marginLeft: 15 },

  button: {
    alignItems: "center",
    width: 204,
    height: 48,
    marginTop: 16
  },

  deleteContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.red,
    borderRadius: 100,
    width: 20,
    height: 20,
    position: "absolute",
    zIndex: 2
  },
  buttonDelete: {
    paddingTop: 24
  },
  buttonText: {
    fontSize: 15,
    color: Colors.white
  }
});
