import { Colors } from "../../colors/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: Colors.lightGrey
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  primaryText: {
    lineHeight: 54,
    fontSize: 36,
    color: Colors.black,
    fontFamily: "SourceSansPro-Regular"
  },
  secondaryText: {
    lineHeight: 20,
    fontSize: 14,
    color: Colors.softGrey,
    fontFamily: "SourceSansPro-Regular"
  },
  topButtonContainer: { alignItems: "flex-start" }
});
