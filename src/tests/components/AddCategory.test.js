import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
    });

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe cambiar la caja de texto', () => {
        // PENDIENTE
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate( 'change', { target: { value: value } } );

    });

    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        // Simular el input change
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate( 'change', { target: { value } } );
        // Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        // setCategories se debe haber llamado una vez
        expect( setCategories ).toHaveBeenCalledTimes(1);
        // setCategories se debe haber llamado con una función
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        // El valor del input debe ser ''
        expect( input.prop('value') ).toBe('');

    })
    
    

})
