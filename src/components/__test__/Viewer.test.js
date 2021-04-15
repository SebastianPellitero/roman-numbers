import React from 'react';
import ReactDOM from 'react-dom';
import Viewer from './../Viewer';

import { cleanup, fireEvent, render } from '@testing-library/react';

afterEach(cleanup);

it ('renders well' , () => {
    const div = document.createElement("div");
    ReactDOM.render(<Viewer></Viewer>, div)
})

const setup = () => {
    const containerRendered = render (<Viewer />)
    return containerRendered;
}

it ('Input accept 1', () => {
    const containerRendered = setup();
    const input = containerRendered.getByLabelText('user-input');
    fireEvent.change(input, {target: {value: '1'}});
    expect(input.value).toBe('1');
})

it ('Input should not accept leters', () => {
    const containerRendered = setup();
    const input = containerRendered.getByLabelText('user-input');
    fireEvent.change(input, {target: {value: 'A'}});
    expect(input.value).toBe('');
});


it ('Can click button', () => {
    const containerRendered = setup();
    const button = containerRendered.getByLabelText('user-button');
    fireEvent.click(button);
})

it ('-Integration- Result is showing after click', () => {
     const containerRendered = setup();
    const result = containerRendered.queryAllByLabelText('user-result');
    expect(result).toStrictEqual([])
    fireEvent.change(containerRendered.getByLabelText('user-input'), {target: {value: '1'}});
    fireEvent.click(containerRendered.getByLabelText('user-button'));
    const result2 = containerRendered.getByLabelText('user-result');
    expect(result2).toBeDefined();
})

it ('-Integration- Input recibe 1 result is I', () => {
    const containerRendered = setup();
    fireEvent.change(containerRendered.getByLabelText('user-input'), {target: {value: '1'}});
    fireEvent.click(containerRendered.getByLabelText('user-button'));
    const result = containerRendered.getByLabelText('user-result').innerHTML;
    expect(result).toBe('I');
})






//   return <input value={value} aria-label="cost-input" onChange={handleChange} />
// }

// const setup = () => {
//   const utils = render(<CostInput />)
//   const input = utils.getByLabelText('cost-input')
//   return {
//     input,
//     ...utils,
//   }
// }

// test('It should keep a $ in front of the input', () => {
//   const { input } = setup()
//   fireEvent.change(input, { target: { value: '23' } })
//   expect(input.value).toBe('$23')
// })