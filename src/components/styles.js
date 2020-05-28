import { StyleSheet, YellowBox } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 25,
        backgroundColor: '#2c3e50',
    },
    header:{
       alignItems: 'center',
    },

    headerText:{
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
    },

    calcBody:{ 
       marginTop: 30,     
       padding: 10,
       borderRadius: 8,
    },

    calcText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#e02041'
    },

    input: { 
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 25,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        color: '#e02041',
        fontSize: 16,
    },

    result: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#e02041',
        fontSize: 22,
        marginLeft: 150,
        fontWeight: 'bold',
    },

    button: {
        borderWidth: 1,
        marginTop: 130,
        padding: 10,
        borderRadius: 5,   
        borderColor: '#777',   
        justifyContent: 'center' ,
        alignItems: 'center',
        backgroundColor: '#e02041'
    },

    buttonClear: {
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,   
        borderColor: '#777',   
        justifyContent: 'center' ,
        alignItems: 'center',
        backgroundColor: '#e02041'
    },

    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'        
    },


});