import React, { useState } from 'react';

// Define a functional component called SearchForm that takes props as an argument.
const SearchForm = (props) => {
    // Initialize a piece of component state called 'inputText' using the 'useState' hook.
    const [inputText, setInputText] = useState("");
  
    // Define a function called 'handleChangeInput' that handles changes in the input field.
    const handleChangeInput = (event) => {
      // Update the 'inputText' state with the new value entered in the input field.
      setInputText(event.target.value);
      // Log the current value of 'inputText' to the console for debugging.
      console.log(inputText);
    };
  
    // Define a function called 'handleFormSubmit' that handles the form submission.
    const handleFormSubmit = (event) => {
      // Prevent the default form submission behavior, which would trigger a page refresh.
      event.preventDefault();
      // Call the 'onSubmit' function passed as a prop, passing the 'inputText' as an argument.
      props.onSubmit(inputText);
    };

  return (
    <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label htmlFor='search-term'>Search for:</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter search term here'
            onChange={handleChangeInput}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
