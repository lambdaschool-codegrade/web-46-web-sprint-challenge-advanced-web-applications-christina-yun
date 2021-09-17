import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';
import mockFetchColorService from './../services/fetchColorService';

jest.mock('./../services/fetchColorService')

const testData = [
    {
        code: {hex: '#8a2be2'},
        color: "blueviolet",
        id: 1},
    {
        code: {hex: '#8a2be2'},
        color: "blueviolet",
        id: 2}
     ] 

test("Renders without errors", ()=> {
    render(<BubblePage />)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    render(<BubblePage />)
    mockFetchColorService.mockResolvedValueOnce(testData);



});