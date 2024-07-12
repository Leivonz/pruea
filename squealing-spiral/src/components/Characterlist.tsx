import '../components/style.css'
import React from 'react';

interface Character {
  gender: string;
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className='pene'>
      <ul className='container'>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Genero: {character.gender}</p>
            <a href={`https://rickandmortyapi.com/api/character/${character.id}`}>Ver detalles</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;