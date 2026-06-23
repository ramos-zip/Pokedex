import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { POKEMON_TYPE_COLORS } from '../../utils/colors';
import { styles } from "./styles";
import Button from "../Button";
import { useRouter } from "expo-router";

export default function Card({ pokemon }) {
    return(
        <TouchableOpacity
            onPress={() => 
                router.push({ pathname: "/pokemon", 
                    params: {...pokemon, Tipo: JSON.stringify(pokemon.Tipo) },
                })
            }
            style={[styles.container,
                { backgroundColor: `${POKEMON_TYPE_COLORS[pokemon. Tipo[0].nome]}` },
            ]}>
            <View style={styles.info}>
                <Text style={styles.numero}>#{pokemon.Numero}</Text>
                <Text style={styles.nome}>#{pokemon.Nome}</Text>
                <ScrollView horizontal>
                    {pokemon.Tipo.map((tipo) => (
                        <Button tipo={tipo} key={tipo.Nome}/>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.ImageContainer}>
                <Image source={{uri: pokemon.Image}} style={styles.imagem}></Image>
            </View>
        </TouchableOpacity>
    );
}