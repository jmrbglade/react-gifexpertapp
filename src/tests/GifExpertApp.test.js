import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";
import React from 'react';

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    })
    test('Debe mostrar una lista de categorías', () => {
        const categories = ['One Punch Man', 'Samurai Jack'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/>);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
})
