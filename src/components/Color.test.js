import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const color = { color: 'aliceblue', code: { hex: '#f0f8ff' }, id: 1 }

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={{ color: '', code: { hex: '#' }, id: null }}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={color}/>)
    const aliceBlue = screen.queryByText(/aliceblue/i);

    expect(aliceBlue).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const toggleEdit = jest.fn();
    const deleteColor = jest.fn();
    render(<Color color={color} toggleEdit={toggleEdit} deleteColor={deleteColor}/>)
    const cancel = screen.getByTestId(/delete/i);
    expect(toggleEdit).toHaveBeenCalledTimes(0);
    expect(deleteColor).toHaveBeenCalledTimes(0);
    userEvent.click(cancel);
    expect(toggleEdit).toHaveBeenCalledTimes(1);
    expect(deleteColor).toHaveBeenCalledTimes(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const toggleEdit = jest.fn();
    const setEditColor= jest.fn();
    render(<Color color={color} toggleEdit={toggleEdit} setEditColor={setEditColor}/>)
    const aliceBlue = screen.getByText(/aliceblue/i);
    expect(toggleEdit).toHaveBeenCalledTimes(0);
    expect(setEditColor).toHaveBeenCalledTimes(0);
    userEvent.click(aliceBlue);
    expect(toggleEdit).toHaveBeenCalledTimes(1);
    expect(setEditColor).toHaveBeenCalledTimes(1);
    
});