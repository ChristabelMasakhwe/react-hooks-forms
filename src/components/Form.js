import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);
  const [number, setNumber] = useState(0);
  const [isInvalidNumber, setIsInvalidNumber] = useState(null);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setIsInvalidNumber(null);
    } else {
      setIsInvalidNumber(`${newNumber} is not a valid number!`);
    }
  }



  function handleFirstNameChange(event) {
setFirstName(event.target.value)
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }
  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked)
  }
  return (
    <form>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange} type="text" value={lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <input type="number" value={number} onChange={handleNumberChange} />
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
