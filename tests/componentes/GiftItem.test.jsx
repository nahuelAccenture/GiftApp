import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe('Pruebas en GridItem', () => {

    const title = "Sitama";
    const url ="https://one-punchh/saitma.jpg";

    test('Debe hacer match con el snapshot', () => {
       const {container} = render(<GiftItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la url con la imagen y el ALT indicado', () => {
        render(<GiftItem title={title} url={url}/>);
        // screen debug.
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

    });

    test('debe mostrar el título en el componente', () => {
        render( <GiftItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
});

