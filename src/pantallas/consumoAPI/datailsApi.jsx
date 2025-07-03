import { Image, Text } from "react-native";
import { Container } from "../../componentes/container/container";
import { styles } from "./datailsApi.stlyles";
export const DetailsApi = ( {route} ) => {
    const { character } = route.params;
    return <Container>
        <Image style={styles.image} source={{uri:character.image}}></Image>
        <Text style={styles.name}>Nombre: {character.name}</Text>
        <Text>Estado: {character.status}</Text>
        <Text>Especie: {character.species}</Text>
        <Text>Gender: {character.gender}</Text>
        <Text>Dirección: {character.location.name}</Text>
    </Container>
    
}