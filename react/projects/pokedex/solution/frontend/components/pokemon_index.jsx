import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon, loading, children}) => {
	if (loading) {
		return (<img
						src="http://orig15.deviantart.net/4317/f/2015/094/c/c/pokeball_by_watolf-d8ogz4y.gif"
						alt="pokemon loading"/>);
	}
	return (
		<section className="pokedex">
			<ul>
				{pokemon && pokemon.map((poke)=> {
					return (<PokemonIndexItem key={poke.id} pokemon={poke}/>);
				})}
			</ul>

			{children}
		</section>
	);
};

export default PokemonIndex;
