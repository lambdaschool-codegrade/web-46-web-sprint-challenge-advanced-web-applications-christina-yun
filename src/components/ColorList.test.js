import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ColorList from './ColorList';

const testData = [
    { color: 'aliceblue', code: { hex: '#f0f8ff' }, id: 1 },
    { color: 'limegreen', code: { hex: '#99ddbc' }, id: 2 },
    { color: 'aqua', code: { hex: '#00ffff' }, id: 3 },
    { color: 'aquamarine', code: { hex: '#7fffd4' }, id: 4 },
    { color: 'lilac', code: { hex: '#9a99dd' }, id: 5 },
    { color: 'softpink', code: { hex: '#dd99ba' }, id: 6 },
    { color: 'bisque', code: { hex: '#dd9a99' }, id: 7 },
    { color: 'softyellow', code: { hex: '#dcdd99' }, id: 8 },
    { color: 'blanchedalmond', code: { hex: '#ffebcd' }, id: 9 },
    { color: 'blue', code: { hex: '#6093ca' }, id: 10 },
    { color: 'blueviolet', code: { hex: '#8a2be2' }, id: 11 }
  ]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testData}/>)
    const colors = screen.queryAllByTestId('color');
    expect(colors).toHaveLength(11);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const toggleEdit = jest.fn(value => !value);
    
    const { rerender } = render(<ColorList editing={true}colors={testData} toggleEdit={toggleEdit}/>)
    
    const limeGreen = screen.queryByText(/limeGreen/i);
    expect(limeGreen).toBeInTheDocument();
    let editForm = screen.queryByText('save');
    expect(editForm).toBeInTheDocument()
    userEvent.click(limeGreen);
    expect(toggleEdit).toHaveBeenCalledTimes(1);

    rerender(<ColorList editing={false}colors={testData} toggleEdit={toggleEdit}/>)
    editForm = screen.queryByText('save');
    expect(editForm).not.toBeInTheDocument()
});
