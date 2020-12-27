import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    test('Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({ 
            data: [],
            loading: true
         });
        const wrapper = shallow(<GifGrid category='One Punch Man' />);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]
        
        useFetchGifs.mockReturnValue({ 
            data: gifs,
            loading: false
         });
        
        const wrapper = shallow(<GifGrid category='One Punch Man' />);

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
})
