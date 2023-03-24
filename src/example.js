import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState(new FormData());

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Add the input value to the form data
    formData.set(name, value);

    // Update the state with the new form data
    setFormData(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data, like send it to a server
    // fetch('/dataEmployee.js', {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    //   console.log(data)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleInputChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleInputChange} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" onChange={handleInputChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;