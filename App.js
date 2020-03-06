import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar, TextInput} from 'react-native';
import {Card, Input, Button} from 'react-native-elements'
import user1 from './assets/user1.png'
import user2 from './assets/user2.png'
import user3 from './assets/user3.png'

import Constants from 'expo-constants';

export default function App() {

     let number2 = React.createRef(null);

     const focusnextInput = (event, id) => {
        if(event.nativeEvent.text.length){
            number2.focus()
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content"/>

            <Card title="ELEIÇÕES 2020">
                <TextInput
                    style={styles.inputSearch}
                    name={'d2v1'}
                    maxLength={1}
                    placeholder={"Pesquise o candidato aqui..."}
                />
            </Card>


            <Text style={styles.text}> Candidato(a) á Prefeito(a)</Text>
            <View style={styles.hr}><Text/></View>

            <View style={styles.row}>

                <Text style={styles.img}>

                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        height: '100%'
                    }}>
                        <Image
                            style={{width: 64, height: 64, marginLeft: 10}}
                            source={user1}
                        />
                    </View>
                </Text>


                <View style={styles.votacao}>
                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d1v1'}
                        maxLength={1}
                        returnKeyType={'next'}
                        onChange={(evt) => {focusnextInput(evt)}}
                        blurOnSubmit={false}
                    />

                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d2v1'}
                        maxLength={1}
                        ref={(input) => { number2 = input}}
                        returnKeyType={'next'}
                        id={2}
                    />

                </View>
            </View>


            <Text style={styles.text}> Candidato(a) á Vereador(a)-1</Text>
            <View style={styles.hr}><Text/></View>

            <View style={styles.row}>

                <Text style={styles.img}>

                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        height: '100%'
                    }}>
                        <Image
                            style={{width: 64, height: 64, marginLeft: 10}}
                            source={user2}
                        />
                    </View>
                </Text>

                <View style={styles.votacao}>
                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d1v2'}
                        maxLength={1}
                        id={3}
                    />

                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d2v2'}
                        maxLength={1}
                        id={4}
                    />

                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d3v2'}
                        maxLength={1}
                        id={5}
                    />


                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d4v2'}
                        maxLength={1}
                        id={6}
                    />


                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d5v2'}
                        maxLength={1}
                        id={7}
                    />

                </View>
            </View>


            <Text style={styles.text}> Candidato(a) á Vereador(a)-2</Text>
            <View style={styles.hr}><Text/></View>

            <View style={styles.row}>

                <Text style={styles.img}>

                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        height: '100%'
                    }}>
                        <Image
                            style={{width: 64, height: 64, marginLeft: 10}}
                            source={user3}
                        />
                    </View>
                </Text>

                <View style={styles.votacao}>
                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d1v3'}
                        maxLength={1}
                    />


                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d2v3'}
                        maxLength={1}
                    />


                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d3v3'}
                        maxLength={1}
                    />


                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d4v3'}
                        maxLength={1}
                    />

                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.inputNumber}
                        name={'d5v3'}
                        maxLength={1}
                    />

                </View>
            </View>


            <Button containerStyle={styles.btn} title="DIGITALIZAR"/>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9870CF',
        display: 'flex',
        paddingTop: Constants.statusBarHeight,
    },

    card: {
        marginTop: 50,
        backgroundColor: '#fff',
        borderRadius: 15
    },
    text: {
        marginLeft: 20,
        // backgroundColor: 'red'
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold'
    },

    hr: {
        height: 1,
        width: '90%',
        backgroundColor: 'white',
        marginLeft: 20,
        marginTop: 10
    },

    row: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    img: {
        width: '20%',
        backgroundColor: 'white',
        marginTop: 20,
        height: 80,
    },

    inputNumber: {

        height: 60,
        borderColor: 'orange',
        borderWidth: 1,
        width: 40,
        marginLeft: 10,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 2
    },

    inputSearch: {

        height: 60,
        borderColor: 'orange',
        borderWidth: 1,
        width: 350,
        marginLeft: 10,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 2
    },

    votacao: {
        width: '65%',
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 20,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },

    btn: {
        marginTop: 30,
        width: '80%',
        marginLeft: 35,
        backgroundColor: 'red'
    }


});
