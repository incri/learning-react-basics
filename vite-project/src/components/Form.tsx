import React, { useState } from 'react'
import { FormEvent } from 'react'

const Form = () => {

    const [person, setPerson] = useState ({
        name: "",
        age : ""
    });
    
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(person)
    }
  return (
    <>
        <h2 className="mb-3 mt-4"><b>Form</b></h2>
    <form onSubmit={handleSubmit}><div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input value={person.name} onChange={(event) => setPerson({...person,name:event.target.value})}id='name' type="text" className="form-control" />
    </div>

    <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input value={person.age} onChange={(event) => setPerson({...person, age: event.target.value})} id='age' type="number" className="form-control" />
    </div>
    <button className='btn btn-primary'>Submit</button>
    </form>
    </>
    
  )
}

export default Form