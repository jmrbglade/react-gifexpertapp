import React from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types'
 
const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     // Éste código se ejecuta una única vez
    //     getGifs( category )
    //         .then( setImages )
    //         .catch( console.error )     
    // }, [ category ]);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">    
                {
                    images.map( (img) => (
                        <GifGridItem 
                            key={ img.id } 
                            { ...img } 
                        />
                        // return <li key={ img.id }>{ img.title }</li>
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
