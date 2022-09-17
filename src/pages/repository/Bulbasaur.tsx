import React from 'react';
import cardss from '../../pokemons/Bulbasaur.jpg';
import { Image }  from './styles';

const Bulbasaur: React.FC = () => {
    return <Image src={cardss} />
}

export default Bulbasaur;
