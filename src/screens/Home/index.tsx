import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

import { Container, Header, Title } from './styles';

export function Home() {
    return(
        <Container>
            <Header>
                <Title>Rolex</Title>
                <TouchableOpacity>
                    <Ionicons name="ios-menu-outline" size={24} color="black" />

                </TouchableOpacity>
            </Header>
        </Container>
    )
}