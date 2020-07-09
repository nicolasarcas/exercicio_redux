// import { createStackNavigator } from '@react-navigation/native'
import ListaDeContatosTela from '../telas/ListaDeContatosTela'
import NovoContatoTela from '../telas/NovoContatoTela'
import DetalhesDoContatoTela from '../telas/DetalhesDoContatoTela'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const ContatosNavigator = createStackNavigator({
    Contatos: ListaDeContatosTela,
    NovoContato: NovoContatoTela,
    DetalheDoContato: DetalhesDoContatoTela
});

export default createAppContainer(ContatosNavigator);

