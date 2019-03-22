import { StyleSheet } from "react-native";
import { Colors } from "../../colors/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.lightGrey
  },
  textContainerRight: {
    alignItems: "flex-start"
  },
  textContainerLeft: {
    alignItems: "flex-end"
  },
  headerContainerLeft: { width: 70, height: 20 },
  headerContainerRight: { width: 50, height: 20 },
  statusBarText: { color: Colors.white, fontSize: 17, lineHeight: 20 },
  textInput: {
    borderBottomWidth: 1,
    fontSize: 36,
    color: Colors.black,
    fontFamily: "SourceSansPro-Regular"
  },
  textDescriptionInput: {
    textAlignVertical: "top",
    height: 90,
    fontFamily: "SourceSansPro-Regular",
    fontSize: 14,
    borderBottomWidth: 1
  }
});
