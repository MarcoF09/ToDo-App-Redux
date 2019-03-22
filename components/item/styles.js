import { Colors } from "../../colors/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 30,
    paddingRight: 16,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.lightGrey
  },
  textContainer: {
    alignItems: "flex-start"
  },
  primaryText: {
    lineHeight: 24,
    fontSize: 16,
    color: Colors.black,
    fontFamily: "SourceSansPro-Regular"
  },
  secondaryText: {
    lineHeight: 20,
    fontSize: 14,
    color: Colors.softGrey,
    fontFamily: "SourceSansPro-Regular"
  }
});
