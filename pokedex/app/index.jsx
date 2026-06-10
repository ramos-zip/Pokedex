import { Image, Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vactor-icons";
import { useRoute } from "expo-router";

const imageSource = require("@/assets/images/headre.jpg");

export default function Header({ title, back = false }) {
  const router = useRouter();

  return (
    
    <View style={styles.container}>
      <View style={styles.imageContainer}/>
        <Image source={imageSource} style={styles.image}/>
    </View>
  );
}