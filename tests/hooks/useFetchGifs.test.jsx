import { screen, render, renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";



describe('Probando el custom hook useFetchGifs', () => {
    
    test('Debe devolver el estado inicial', () => {
    
        const {result} = renderHook(()=> useFetchGifs('Dragon Ball Z'));
        const {images, isLoading} = result.current;
        
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes y el isLoading en true', async () => {
    
        const {result} = renderHook(()=> useFetchGifs('Dragon Ball Z'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});