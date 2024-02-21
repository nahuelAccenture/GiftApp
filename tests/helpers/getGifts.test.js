import { getGifts } from "../../src/helpers/getGifts";

describe('pruebas en GetGifts', () => {
    test('debe de retornar un arreglo de gifts ', async () => {
        const gifts = await getGifts('Dragon Ball Z');
        expect(gifts.length).toBeGreaterThan(0);
        expect(gifts[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            }
        )
    });
});