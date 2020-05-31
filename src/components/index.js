import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

import styles from './styles';

export default function Calculadora() {

  const [comprimento, setComprimento] = useState(0);
  const [largura, setLargura] = useState(0);
  const [precoMetro, setPrecoMetro] = useState(0);
  const [resultado, setResultado] = useState(0);

  const [campoResultado, setCampoResultado] = useState("");

  var preco_unit;
  var ped_minimo;

  const Calcular = () => {

    //setResultado(parseInt(comprimento) + parseInt(largura));

    //calculando o número mínimo de peças peças para o pedido
    ped_minimo = (300 / largura);
    //Arredondando para baixo a quantidade mínima para o pedido
    ped_minimo = Math.floor(ped_minimo);

    //calculando o valor das lixas
    preco_unit = (precoMetro * (comprimento * 0.001));                            
    preco_unit = preco_unit + preco_unit * (0.1);

    //Calculando o preço unitário das lixas
    preco_unit = preco_unit / Math.round(ped_minimo);

    setResultado(preco_unit);
    
   

    if (resultado) {

      setCampoResultado(resultado.toString());

    } else {
      setCampoResultado("");
    }
    console.log(campoResultado);
    // Alert.alert("Resultado", `Valor total da Lixa ${resultado} `);
  }

  const LimparCampos = () => {
    if (largura != '' || comprimento != '' || precoMetro != '') {
      setComprimento('');
      setLargura('');
      setPrecoMetro('');
      setCampoResultado('');
      setResultado('');
    } else {
      Alert.alert('Aviso', 'Os campos já estão vazios.');
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

        <Text style={styles.calcText}>
          Preço do metro(Rolo de 300mm)
        </Text>

        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder={'Informe o preço do metro(rolo de 300mm)'}
          onChangeText={setPrecoMetro}
          //onChangeText={(value) => setLargura(value)}
          value={precoMetro}
        />

        <Text
          style={styles.result}
        > Valor unitário: R${campoResultado}</Text>



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