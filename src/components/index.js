import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

import styles from './styles';

export default function Calculadora() {

  const [comprimento, setComprimento] = useState(0);
  const [largura, setLargura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const [campoResultado, setCampoResultado] = useState("");


  const Calcular = () => {

    setResultado(parseInt(comprimento) + parseInt(largura));

    if (resultado) {

      setCampoResultado(resultado.toString());

    } else {
      setCampoResultado("");
    }
    console.log(campoResultado);
    // Alert.alert("Resultado", `Valor total da Lixa ${resultado} `);
  }

  const LimparCampos = () =>{
    if(this.comprimento === ''){
      Alert.alert('Aviso', 'O comprimento da lixa deve ser informado');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculadora para Lixas Cinta</Text>
      </View>

      <View style={styles.calcBody}>

        <Text style={styles.calcText}>
          Comprimento da Lixa
        </Text>

        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder={'Informe o comprimento da lixa em milímetros'}
          onChangeText={setComprimento}
          //onChangeText={(value) => setComprimento(value)}
          value={comprimento}
        />

        <Text style={styles.calcText}>
          Largura da Lixa
        </Text>

        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder={'Informe a largura da lixa em milímetros'}
          onChangeText={setLargura}
          //onChangeText={(value) => setLargura(value)}
          value={largura}
        />

        <Text
          style={styles.result}
        >{campoResultado}</Text>



        <TouchableOpacity
          style={styles.button}
          onPress={() => Calcular()}>
          <Text style={styles.buttonText}>
            Calcular
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonClear}
          onPress={() => LimparCampos()}
        >
          <Text style={styles.buttonText}>
            Limpar
          </Text>
        </TouchableOpacity>



      </View>
    </View>
  );
}