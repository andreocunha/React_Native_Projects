import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Category';
import Home from './components/Explore/Home';


const { height, width } = Dimensions.get('window')

class Explore extends Component {

    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{height:this.startHeaderHeight, backgroundColor:'white',
                borderBottomWidth: 1, borderBottomColor:'#dddddd'}}>
                    <View style={{ flexDirection: 'row', padding:10,
                                    backgroundColor:'white', marginHorizontal:20,
                                     marginTop:40, shadowOffset:{width:0, height:0},
                                     shadowColor:'black',
                                     shadowOpacity: 0.2,
                                     elevation:1,
                                     marginTop: Platform.OS == 'android' ? 30: null
                                     }}>
                        <Icon name="ios-search" size={20} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Try New Delhi"
                            placeholderTextColor="grey"
                            style={{ flex: 1, fontWeight: '700',
                            backgroundColor:'white', marginHorizontal:15}}
                        />
                    </View>
                    </View>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex:1, backgroundColor:'white', paddingHorizontal:20}}>
                            <Text style={{ fontSize: 24, fontWeight: '700',
                                paddingHorizontal:20 }}>
                                What can we help you find, Varun?
                            </Text>

                            <View style={{ height: 130, marginTop:20}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('../assets/imagem1.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../assets/imagem2.jpeg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../assets/imagem3.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20}}>
                                <Text style={{ fontSize:24, fontWeight: '700'}}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop:10}}>
                                    A new selection of homes verified for quility & comfort
                                </Text>
                                <View style={{ width: width-80, height:200, marginTop: 20}}>
                                    <Image 
                                        style={{flex:1, height:null, width:null, resizeMode: 'cover', borderRadius: 10, borderWidth:1, borderColor:'#dddddd'}}
                                        source={require('../assets/imagem4.png')}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Homes around the world
                            </Text>
                            <View style={{ paddingHorizontal:10, marginTop:20, flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
                                <Home width={width}
                                    imageUri={require('../assets/imagem5.png')}
                                    name="The Coze Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />
                                <Home width={width}
                                    imageUri={require('../assets/imagem6.jpg')}
                                    name="The Coze Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={5}
                                />
                                <Home width={width}
                                    imageUri={require('../assets/imagem7.jpg')}
                                    name="The Coze Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4.5}
                                />
                                <Home width={width}
                                    imageUri={require('../assets/imagem8.jpg')}
                                    name="The Coze Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={3.5}
                                />
                                
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});