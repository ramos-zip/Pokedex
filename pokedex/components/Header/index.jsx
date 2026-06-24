import { Image, Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const imageSource = require("@/assets/images/header.jpg");

export default function Header({ title, back = false }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image}/>
      </View>
      <View style={styles.titleContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {
            back &&
            <Pressable onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="Arrow-back" size={28} color="black"/>
            </Pressable>
          }
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text styles={{ fontSize: 16 }}>
          {!back ? "Encontre seu pokemon favorito." : "Aqui esta o seu problema"}
        </Text>
      </View>
    </View>
  );
}