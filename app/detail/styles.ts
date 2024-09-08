import { COLORS } from "@/src/constants/Colors";
import { normalize, normalizeFont, normalizeHeight, normalizeWidth } from "@/src/mixins";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  homeImage: {
    height: normalizeHeight(200),
    width: '100%',
    position:'relative',
  },
  descriptionContainer: {
    marginTop: normalizeHeight(10),
    padding:normalize(10),
  },
  heading: {
    fontSize: normalizeFont(14),
    color: COLORS.backgroundColor,
    fontWeight: '700',
    marginRight:normalizeWidth(10),
  },
  textContainer: {
    flexDirection:'row',
  },
  goBack: {
    marginBottom: normalizeHeight(20),
    marginLeft:normalizeWidth(10),
  },
  unLockButton: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingVertical: normalizeHeight(15),
    paddingHorizontal: normalizeWidth(10),
    borderRadius:normalize(4),
  },
  descriptionText: {

  },
});
