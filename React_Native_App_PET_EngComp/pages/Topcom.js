import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
} from "react-native";


import {Header, Left, Icon} from 'native-base';

class Topcom extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Left style={styles.topo}>
                        <Icon name="menu" onPress={()=>
                            this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>

                <ImageBackground source={require('../imagens/fundoTopcom.png')} style={styles.backgroundImage} >
                </ImageBackground>

                <View >
                    <Image source={require('../imagens/topcom.png')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
O Topcom, Torneio de Programação de Computadores, promovido pelo PET Engenharia de Computação (UFES) proporciona aos estudantes de computação a oportunidade de demonstrar, compartilhar e aprimorar suas habilidades em solucionar problemas usando o computador. O torneio explora o trabalho em equipe sob pressão e estimula a criatividade.

Esse projeto visa motivar a participação de instituições locais em competições nacionais universitárias, como a Maratona de Programação.

O torneio consiste na resolução e implementação de uma lista de problemas em um intervalo de tempo específico. A elaboração e correção dos problemas contam com a participação de professores do Departartamento de Informática da UFES.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default Topcom;

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
        top: -580,
        left: 0,
        width: 350,
        height:150,

    },
    texto:{
        fontSize: 15,
        color: 'black',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: -420,
    },
    backgroundImage: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',
    },

});