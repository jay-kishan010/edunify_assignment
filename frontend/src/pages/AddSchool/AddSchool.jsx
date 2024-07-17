// src/components/AddSchool.jsx

import { useForm } from 'react-hook-form';
// import axios from 'axios';
import "./AddSchool.css"

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    const imageFile = data.image[0];
    formData.append('image', imageFile);

    // await axios.post('http://localhost:5000/api/schools', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-group">
        <label>Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span className="error">This field is required</span>}
      </div>
      <div className="form-group">
        <label>Address</label>
        <input {...register('address', { required: true })} />
        {errors.address && <span className="error">This field is required</span>}
      </div>
      <div className="form-group">
        <label>City</label>
        <input {...register('city', { required: true })} />
        {errors.city && <span className="error">This field is required</span>}
      </div>
      <div className="form-group">
        <label>State</label>
        <input {...register('state', { required: true })} />
        {errors.state && <span className="error">This field is required</span>}
      </div>
      <div className="form-group">
        <label>Contact</label>
        <input {...register('contact', { required: true, pattern: /^[0-9]+$/ })} />
        {errors.contact && <span className="error">This field is required and must be a number</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email_id && <span className="error">This field is required and must be a valid email</span>}
      </div>
      <div className="form-group">
        <label>Image</label>
        <input type="file" {...register('image', { required: true })} />
        {errors.image && <span className="error">This field is required</span>}
      </div>
      <button type="submit" className="submit-btn">Add School</button>


    </form>
  );
}
