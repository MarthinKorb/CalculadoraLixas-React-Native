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
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 8,
        color: '#e02041'
    },

    input: { 
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 10,
        borderRadius: 5,
        padding: 8,
        backgroundColor: '#fff',
        color: '#e02041',
        fontSize: 16,
    },

    result: {
        backgroundColor: '#fff',
        textAlign: 'center',  
        padding: 8,      
        color: '#e02041',
        fontSize: 22,
        fontWeight: 'bold',
        borderRadius: 8,
        marginTop: 10
    },

    button: {
        borderWidth: 1,
        marginTop: 50,
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