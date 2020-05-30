import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class Mobiliza extends Component {
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
                    <Image source={require('../imagens/mobiliza.jpg')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
O Mobiliza PET é um movimento fundado para lutar pela valorização do Programa de Educação Tutorial, assim como a diversidade de cada grupo, buscando a manutenção da educação de qualidade, valorizando e estimulando a potencialidade dos grupos PETs.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default Mobiliza;

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
        width: 320,
        height:320,
        borderRadius: 20,

    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 350,
    }
});