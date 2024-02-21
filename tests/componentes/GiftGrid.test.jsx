import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el componente GiftGrid', () => {

    const category = 'Dragon Ball Z';

    test('Debe de mostrar el isLoading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });
        
        render(<GiftGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifts = [
            {
                id:' ABC',
                title: 'Saitama',
                url:'http://localhost/saitama.jpg'
            },
            {
                id:' 123',
                title: 'Dragon Ball Z',
                url:'http://localhost/dragon-ball-z.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            images:gifts,
            isLoading: true
        });

        render(<GiftGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
        // screen.debug();
    });
});