import React from 'react';
import NavBar from './NavBar';
import CharacterList from './CharactersList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCharacters } from '../redux/actions/characterActions';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return(
    <div>
      <NavBar inHome={true}/>
      <CharacterList />
    </div>
  )
}

export default Home;