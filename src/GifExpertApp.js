import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid'; 

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['One Punch', 'Samurai Jack', 'Dragon Ball'];
    const [categories, setCategories] = useState( defaultCategories );
    
    // const handleAdd = () => {
    //     setCategories([...categories, 'Yakusoku no Neverland']);
    // }

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={ setCategories }/>
          <hr /> 
          {/* <button onClick={ handleAdd }>Agregar</button> */}
          <div>
              {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                    // <li key={ category }>{ category }</li>
                ))
              }
          </div>
        </>
    );
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp;
