import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Tela 1</Text>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    texto:{
        fontSize: 30,
        color: 'white'
      }
});