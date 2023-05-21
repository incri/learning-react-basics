import React, { useState } from 'react'
import { FormEvent } from 'react'
import { FieldValue, FieldValues, useForm } from 'react-hook-form'

interface FormData{
    name: string;
    age:number;
}
const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>()


    const onSubmit = (data:FieldValues) => console.log(data);
    
  return (
    <>
        <h2 className="mb-3 mt-4"><b>Form</b></h2>
    <form onSubmit={handleSubmit(onSubmit)}><div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input {...register('name', {required:true, minLength:3})} id='name' type="text" className="form-control" />
        {errors.name?.type === 'required' && <p className='text-danger'>The name field is required</p>}
        {errors.name?.type === 'minLength' && <p className='text-danger'>The name must be at least 3 character</p>}

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