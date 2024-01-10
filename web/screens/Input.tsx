import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'


interface InputProps { }

const Input = (props: InputProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputFieldContainer}>
                <View style={styles.emojiStating}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name='emoticon-excited-outline' size={27} color='gray' style={{ paddingTop: 10 }} />
                    </TouchableOpacity>
                    <TextInput placeholder='Message' style={styles.inputText} />
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <AntDesign name='link' color='gray' size={20} />
                    </TouchableOpacity>
                        <TouchableOpacity>
                    <View style={styles.camera}>
                            <FontAwesome name='camera' color='gray' size={20} />
                    </View>
                        </TouchableOpacity>
                </View>
            </View>
                <TouchableOpacity>
            <View style={styles.voiceContainer}>
                    <FontAwesome name='microphone' size={20} color='white' />
            </View>
                </TouchableOpacity>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    inputFieldContainer: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputText: {
        fontSize: 18,
        marginLeft: 10,
        color: 'black',
    },
    emojiStating: {
        alignSelf: 'center',
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row'

    },
    iconContainer: {
        flexDirection: 'row',
        marginRight: 10,

    },
    camera: {
        marginLeft: 15
    },
    voiceContainer: {
        backgroundColor: '#128C7E',
        padding: 15,
        borderRadius: 100,
        marginHorizontal: 5
    }
});
