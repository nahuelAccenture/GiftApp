import { render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('Pruebas en <GiftExpertApp/>', () => {
    test('Probando el estado inicial en categorias', () => {

        const categories = 'Dragon Ball Z';

        render(<GiftExpertApp/>);
        
        const value = screen.getByText(categories);

    });
});