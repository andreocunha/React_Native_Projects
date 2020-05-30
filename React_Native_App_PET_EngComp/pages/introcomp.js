import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class introcomp extends Component {
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
                    <Image source={require('../imagens/introcomp.gif')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
O projeto Introcomp – Introdução à Computação, aos moldes de uma estratégia já adotada no Estados Unidos, vem com a premissa principal de levar o ensino de programação a alunos do ensino médio, tendo como foco os alunos da rede pública, visto que, geralmente, os programas visando inclusão digital desenvolvidos pelo Governo Federal  se limitam ao treinamento no uso de tecnologias (informática básica), e não à programação em si.

Promovido e criado no final de 2010 pelo PET Engenharia de Computação da UFES, o Introcomp proporciona aos estudantes a oportunidade de explorar mais a fundo tecnologias da informação, bem como serem capazes de resolver problemas por meio da computação, instigando nestes características como a criatividade e, principalmente, o raciocínio lógico.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default introcomp;

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
        top: 20,
        left: 20,
        width: 300,
        height:110,
        backgroundColor: 'silver',
        borderRadius: 100,
    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 150,
    }
});