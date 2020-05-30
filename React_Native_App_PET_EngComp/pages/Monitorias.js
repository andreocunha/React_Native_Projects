import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class Monitorias extends Component {
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
                    <Image source={require('../imagens/monitoria.png')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
Alguns Petianos com mais facilidade em determinadas matérias fornecem monitorias para os alunos em algumas disciplinas, tais como Estruturas de Dados e Tópicos Especiais em Programação.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default Monitorias;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#073243',
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
        left: 50,
        width: 250,
        height:200,
        borderRadius: 20,
    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 230,
    }
});