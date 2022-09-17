import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Repositories } from './styles';
import pokemon from '../../assets/pokemon.png';


const Dashboard: React.FC = () => {

    return(
        <>

            <Title>
                <div>
                    <h1>
                        <img src={pokemon} alt="Pokemon"
                        width={150}
                        height={50} />

                    </h1>
                </div>
                <br />
            </Title>


        <Repositories>

            <a href="./repository/Pikachu.tsx">
                <img src="https://vignette.wikia.nocookie.net/pokedex/images/7/77/Pikachu.png/revision/latest?cb=20141025185647&path-prefix=pt-br" alt="Pokemóns" />

                <div>

                    <strong>Pikachu</strong>

                    <p>
                        Pikachu é um Pokémon do tipo Electric introduzido na Geração I.
                        Ele evolui de Pichu ao passar de nível com amizade alta e evolui para Raichu com a Thunderstone.
                        Altura = 0,4 m
                        Peso = 6 kg
                    </p>

                </div>

                <FiChevronRight size={20} />

            </a>

            <a href="../repository/Charmander.tsx">
                <img src="https://vignette.wikia.nocookie.net/pokedex/images/5/56/Charmander.png/revision/latest?cb=20141027195510&path-prefix=pt-br" alt="Pokemóns" />

                <div>

                    <strong>Charmander</strong>

                    <p>
                        Charmander é um Pokémon do tipo Fogo que foi introduzido na Geração I.
                        Ele evolui para Charmeleon e para Charizard.
                        Peso = 8,5 Kg
                        Altura = 0,6 m

                    </p>

                </div>

                <FiChevronRight size={20} />

            </a>

            <a href="../repository/Bulbasaur.tsx">
                <img src="https://vignette.wikia.nocookie.net/pokedex/images/2/24/Bubassaur.png/revision/latest?cb=20141012190624&path-prefix=pt-br" alt="Pokemóns" />

                <div>

                    <strong>Bulbasaur</strong>

                    <p>
                        Bulbasaur é um Pokémon de dois tipos: Grass e Poison que foi introduzido na Geração I.
                        Ele evolui para Ivysaur, que então evolui para Venusaur.
                        Peso = 6,9 kg
                        Altura = 0,7 m

                    </p>

                </div>

                <FiChevronRight size={20} />

            </a>

            <a href="../repository/Squirtle.tsx">
                <img src="https://vignette.wikia.nocookie.net/pokemonet/images/3/39/007Squirtle.png/revision/latest/scale-to-width-down/250?cb=20130505013204&path-prefix=pt-br" alt="Pokemóns" />

                <div>

                    <strong>Squirtle</strong>

                    <p>
                        Squirtle é do tipo água. Squirtle evolui para um Wartortle
                        e novamente para um Blastoise.
                        Altura = 0.5 m
                        Peso = 9.0 kg
                    </p>

                </div>

                <FiChevronRight size={20} />

            </a>

        </Repositories>

        </>
    );
};

export default Dashboard;
