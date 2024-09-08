import { StyleSheet } from "react-native";
import {
  normalize,
  normalizeFont,
  normalizeHeight,
  normalizeWidth,
  WINDOW_WIDTH,
} from "@/src/mixins/index";
import { COLORS } from "@/src/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:normalizeWidth(20),
  },
  mainHeading: {
    fontSize: normalizeFont(20),
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: normalizeHeight(10),
  },
  homeImage: {
    height: 150,
    width: WINDOW_WIDTH - normalizeWidth(40),
    borderRadius:normalize(4),
  },
  homeAddress: {
    fontSize: normalizeFont(16),
    fontWeight: '700',
    color: COLORS.textColor,
  },
  homeDescription: {
    fontSize: normalizeFont(16),
    fontWeight: '500',
    color: `${COLORS.textColor}90`,
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: normalizeHeight(10),
    paddingHorizontal: normalizeWidth(10),
    width: '100%',
    backgroundColor: '#091E38E5',
    borderBottomLeftRadius: normalize(4),
    borderBottomRightRadius:normalize(4),
  },
  itemSeparator: {
    marginVertical: normalizeHeight(10),
    height: 2,
    backgroundColor: '#000080',
  },
  cardContainer: {

  },
});
