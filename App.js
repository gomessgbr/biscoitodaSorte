import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import biscoito from './src/assets/biscoito.png';
import biscoito2 from './src/assets/biscoitoAberto.png';

export default function App() {
  const [click, setClick] = useState(false);
  const [textoFrase, setTextoFrase] = useState('Frase');

  const quebrabiscoito = () => {
    const frases = [
      'Siga os bons aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vale mais do que muito conhecimento.',
      'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',
      'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
      'Uma bela flor é incompleta sem as suas folhas.',
      'Sem o fogo do entusiasmo, não há o calor da vitória.',
      'O riso é a menor distância entre duas pessoas.',
      'Os defeitos são mais fortes quando o amor é fraco.',
    ];
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    console.log(numeroAleatorio);
    !click ? setTextoFrase(frases[numeroAleatorio]) : setTextoFrase('');
    return click ? setClick(false) : setClick(true);
  };

  const dropCookie = () => {};
  return (
    <>
      <View style={styles.container}>
        <Image source={!click ? biscoito : biscoito2} style={styles.img} />
        <Text style={styles.textoFrase}>{textoFrase}</Text>
        <TouchableOpacity onPress={() => quebrabiscoito()} style={styles.botao}>
          <View style={styles.viewBotao}>
            <Text style={styles.textoBotao}>
              {click ? ' Outro biscoito' : 'Quebrar biscoito'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  viewBotao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
