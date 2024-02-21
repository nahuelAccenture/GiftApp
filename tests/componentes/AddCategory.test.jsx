import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory";

describe('Probando el componente <AddCategory>', () => {
    
    test('Debe de cambiar el valor de la caja de texto', () => {
  
        render(<AddCategory onNewCategory={() => {}}/>)
       
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});
        // screen.debug();
        expect(input.value).toBe('Saitama');

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();


        render( <AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        // screen.debug();
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); // Comprueba que la funcion se llama. 
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si el input esta vacío', () => {
        
        const inputValue = '';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        // screen.debug();
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});

