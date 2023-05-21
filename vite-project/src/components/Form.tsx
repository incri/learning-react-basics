import React, { useState } from 'react'
import { FormEvent } from 'react'
import { FieldValue, FieldValues, useForm } from 'react-hook-form'


const Form = () => {

    const {register, handleSubmit} = useForm()


    const [person, setPerson] = useState ({
        name: "",
        age : ""
    });

    const onSubmit = (data:FieldValues) => console.log(data);
    
  return (
    <>
        <h2 className="mb-3 mt-4"><b>Form</b></h2>
    <form onSubmit={handleSubmit(onSubmit)}><div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input {...register('name')} id='name' type="text" className="form-control" />
    </div>

    <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input  {...register('age')} id='age' type="number" className="form-control" />
    </div>
    <button className='btn btn-primary'>Submit</button>
    </form>
    </>
    
  )
}

export default Form