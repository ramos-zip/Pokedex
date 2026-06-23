import { StyleSheet, Text, View } from "react-native";

export default function TextInfo({ label, text }) {
    return (
        <Text style={styles.text}>
            <Text style={styles.bold}>{label}:</Text> {text}
        </Text>
    )
}