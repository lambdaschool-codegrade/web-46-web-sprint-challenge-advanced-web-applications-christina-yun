import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={{ color: '', code: { hex: '#' }, id: null }}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={{ color: 'aliceblue', code: { hex: '#f0f8ff' }, id: 1 }}/>)
    const aliceBlue = screen.queryByText(/aliceblue/i);

    expect(aliceBlue).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    // const handleDelete = jest.fn();
    // const toggleEdit = jest.fn();
    // render(<Color toggleEdit={true} />)
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});