import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class Jacee extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Left style={styles.topo}>
                        <Icon name="menu" onPress={()=>
                            this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>

                <View >
                    <Image source={require('../imagens/jacee.png')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
As Jornadas de Atualização em Computação, Elétrica e Eletrônica (JACEE) surgiu como uma colaboração entre o PET de Eng. de Computação e o PET de Eng. Elétrica, visando promover a divulgação de tecnologias e o aperfeiçoamento de conhecimentos técnico-científicos dos graduandos por meio de palestras e minicursos. Teve duração de três dias: de 20 a 22 de Setembro de 2012.

Em sua primeira edição, o evento só comportou alunos dos cursos de Engenharia de Computação, Ciência da Computação e Engenharia Elétrica da UFES. Aluno dos mesmos cursos em outras instituições precisaram aguardar por uma lista de espera.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default Jacee;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },


    topo:{
        position: 'absolute', 
        left: 20, 
        right: 0, 
        top: 25,
    },
    imagens:{
        position: 'absolute',
        top: 20,
        left: 20,
        width: 300,
        height:150,
    },
    texto:{
        fontSize: 15,
        color: 'black',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 180,
    },
});