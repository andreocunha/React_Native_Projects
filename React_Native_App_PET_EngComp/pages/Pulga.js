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
                    <Text style={styles.titulo}>Pulga</Text>
                    <Image source={require('../imagens/pulga.gif')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
A comissão Pulga ou PET Divulga é responsável por fazer o marketing dos projetos do PET. Lá são produzidos videos, fotos e outros materiais que serão divulgados nos canais de comunicação.
                    `}</Text>

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
        left: 20,
        width: 300,
        height:200,
    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 300,
    },
    titulo:{
        color: 'white',
        fontSize: 30,
        left: 130,
        top: 15,
    },
});