import React from 'react';
import cards from '../../pokemons/Pikachu.jpg';
import { Image } from './styles'

const Pikachu: React.FC = () => {
    return <Image src={cards}/>
}

export default Pikachu;
