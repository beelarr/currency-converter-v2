import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const imageWidth = Dimensions.get("window").width / 2;

const styles = EStyleSheet.create({
  container: {
    alignItems: "center"
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    width: imageWidth,
    height: imageWidth
  },
  logoImage: {
    width: imageWidth / 2,
    height: imageWidth / 2
  }
});

export default styles;