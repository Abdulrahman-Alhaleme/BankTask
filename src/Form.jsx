import React from "react";
import './App.css';
import { useState } from "react";

function Form() {
  const [formValue, setFormValue] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    areYouAnEmplyee: false,
    Salary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formValue);
    
  };

  
  return (
    <form className="RequestingForm" onSubmit={handleSubmit}> 
        <h1>Requesting a Loan</h1>
        <hr />
        
      <label>Name:</label>
      <input
        type="text"
        value={formValue.name}
        onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
      />

      <label>Phone Number:</label>
      <input
        type="text"
        value={formValue.phoneNumber}
        onChange={(e) =>
          setFormValue({ ...formValue, phoneNumber: e.target.value })
        }
      />
      <label>Age:</label>
      <input
        type="text"
        value={formValue.age}
        onChange={(e) =>
          setFormValue({ ...formValue, age: e.target.value })
        }
      />
      <label>Are You An Emplyee:</label>
      <input
        type="checkbox"
        checked={formValue.areYouAnEmplyee}
        onChange={(e) =>
          setFormValue({ ...formValue, areYouAnEmplyee: e.target.checked})
        }
      />
      <label >Salary</label>
      <select value={formValue.Salary} onChange={(e)=>{
        setFormValue({...formValue,Salary:e.target.value})
      }}>
        <option >Less then 500$</option>
        <option >Between 500 to 750</option>
        <option >More then 750$</option>
      </select>
      <button type="submit">submit</button>
      
    </form>
  );
}

export default Form;
