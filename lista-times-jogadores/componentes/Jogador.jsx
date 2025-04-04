import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const Jogador = ({ nome, numero, imagem }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Image source={{ uri: imagem }} style={styles.imagemJogador} />
        <View style={styles.texto}>
          <Text style={styles.nome}>{nome}</Text>
          <Text>Número: {numero}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    padding: 10,
    
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagemJogador: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  texto: {
    flex: 1,
  },
  nome: {
    fontWeight: 'bold',
  },
  
});

export default Jogador;
