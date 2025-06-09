import { Card } from "../../componentes/card/card";
import { Container } from "../../componentes/container/container";

export const ConsumoAPI = () => {
    return <Container>
        <Card url="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            nombre="Rick Sanchez"
            especie="Human"
        ></Card>
    </Container>
}

