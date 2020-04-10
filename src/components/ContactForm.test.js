import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

// test form is displaying
test('Form is appearing', () => {
    const { getByText } = render(<ContactForm />);

    //assert get the text from the dom and expect it to be in the doc
    const fNameText = getByText(/first name/i)
    expect(fNameText).toBeVisible();
});


// test that all required fields are filled in on submit
test('test form submit', async () => {
    const { getByLabelText, getByTestId, getByText } = render(<ContactForm />);
    // grabbing input nodes
    const fNameInput = getByLabelText(/first Name/i);
    const lNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    // act
    // adding values to input fields 
    fireEvent.change(fNameInput, { target: { value: 'Devin' } })
    fireEvent.change(lNameInput, { target: { value: 'Moore' } })
    fireEvent.change(emailInput, { target: { value: 'email@email.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello World' } })

    // assert
    expect(fNameInput.value).toBe('Devin');
    expect(lNameInput.value).toBe('Moore');
    expect(emailInput.value).toBe('email@email.com');
    expect(messageInput.value).toBe('Hello World');

    // click submit
    fireEvent.click(getByTestId('submit'))

    // check that pre is displaying
    async () => {
        act(async () => {
            fireEvent.click(submitButton);
            const formData =  await findByTestId("dataId")
            expect(formData).toBeInTheDocument();
        })
    }
});
// test min length on first name
// test that user can type into inputs
// check that submit button works
// check that values are pulled from inputs
// email not requiring @ symbol