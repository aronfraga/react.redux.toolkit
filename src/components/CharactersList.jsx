import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CharactersList = () => {

  const { characters } = useSelector((state) => state.characters);
  const { searchedCharacters } = useSelector((state) => state.characters);
  const { searchStatus } = useSelector((state) => state.searchStatus);

  function handlerDataSelector() {
    if(!searchedCharacters) return characters;
    if(searchStatus) return [searchedCharacters];
    if(!searchStatus) return characters;
  }

  return (
    <div>
      <div className='container mt-4'>
        <div className='row'>
          {handlerDataSelector()?.map((data, idx) => (
            <div key={idx} className='col-md-3 mb-4'>
              <div className='card border border-secondary shadow p-3 mb-2 bg-body rounded'>
                <Link to={`/character/${data.id}`} className='card'>
                  <img src={data.image} alt='avatar'/>
                </Link>
              <div className='card-body'>
                <h5 className='card-title'>{data.name.slice(0, 17)}</h5>
                <p className='card-text'>{`Status: ${data.status}`}</p>
                <p className='card-text'>{`Gender: ${data.gender}`}</p>
                <p className='card-text'>{`Species: ${data.species}`}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharactersList;