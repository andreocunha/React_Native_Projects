import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class ADM extends Component {
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
                    <Text style={styles.titulo}>Steps</Text>
                    <Image source={require('../imagens/Steps.png')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
Nos seis meses que procedem o curso do Introcomp, é iniciado o preparatório para a Olímpiada Brasileira de Informática (OBI), no qual é ofertado aulas para alunos que queiram competir nas modalidades de Programação. A OBI, organizada pelo Instituto de Computação da UNICAMP, é uma competição organizada nos moldes das outras olimpíadas científicas brasileiras, com medalhas como forma de premiação para os alunos mais bem colocados. A competição exige conhecimentos aprofundados em programação de computadores, com questões de níveis fáceis até mais complexos, promovendo aos alunos o desafio de resolverem problemas de maneira eficiente e no menor tempo possível, fazendo uso de alguma linguagem de programação.                    `}</Text>

                </View>
            </View>
        );
    }
}
export default ADM;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
    },


    topo:{
        position: 'absolute', 
        left: 20, 
        right: 0, 
        top: 25,
    },
    imagens:{
        position: 'absolute',
        top: 70,
        left: 70,
        width: 220,
        height:120,
    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 200,
    },
    titulo:{
        color: 'white',
        fontSize: 30,
        left: 140,
        top: 15,
    },
});