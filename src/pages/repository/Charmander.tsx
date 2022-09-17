import React from 'react';
import card from '../../pokemons/Charmander.jpg';
import { Image } from './styles';

const Charmander: React.FC = () => {
    return <Image src={card}/>
}

export default Charmander;
