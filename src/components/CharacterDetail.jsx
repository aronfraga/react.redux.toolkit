import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCharacterDetail } from '../redux/actions/characterActions';
import { cleanCharacterDetail } from '../redux/actions/characterActions';
import NavBar from './NavBar';


const CharacterDetail = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { characterDetail } = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(id));
      return () => {
        dispatch(cleanCharacterDetail());
      }
  },[dispatch, id]);

  function detailRender() {
    return (
      <div className='container d-flex justify-content-center'>
        <div className='card mb-3 border border-secondary shadow p-3 mb-5 bg-body rounded' style={{ width: '1000px' }}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img src={characterDetail.image} className='img-fluid rounded-start' alt='image not found'/>
            </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title fs-1'>{characterDetail.name}</h5>
              <p className='card-text mt-4'>Gender: {characterDetail.gender}</p>
              <p className='card-text'>Status: {characterDetail.status}</p>
              <p className='card-text'>Species: {characterDetail.species}</p>
              <p className='card-text mt-5'><small className='text-muted'>{`Last updated ${Math.ceil(Math.random()*60)} mins ago`}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  function spinnerRender() {
    return (
      <div className='d-flex justify-content-center mt-5'>
        <div className='spinner-border text-warning mt-5' style={{width: '6rem', height: '6rem' }} role='status'>
          <span className='sr-only'></span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <NavBar inHome={false} />
      <br />
      {Object.keys(characterDetail).length===0?spinnerRender():detailRender()}
    </div>
  )
}

export default CharacterDetail;