import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState(
    {
      firstName: "John",
      lastName: "Henry",
    }
  );

  function handleChange(event) {
    const name = event.target.name
    const value = (event.target.type === "checkbox"? event.target.checked : event.target.value)

    console.log(name, value)
    setFormData(
    {
      ...formData,
      [name]:value
    }
    );
  }

  return (
    <form>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange}  checked={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
