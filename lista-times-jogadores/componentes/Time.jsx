import React from 'react';
import {  Image, FlatList, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import Jogador from './Jogador';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={nome} subtitle={`Fundado em ${anoFundacao} - Mascote: ${mascote}`} />
      <Card.Content>
        <Image source={{ uri: imagem }} style={styles.imagemTime} />
        <Title>Jogadores:</Title>
        <FlatList
        horizontal
          data={jogadores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Jogador nome={item.nome} numero={item.numero} imagem={item.imagem} />
          )}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    
  },
  imagemTime: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Time;
