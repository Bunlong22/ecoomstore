import React from 'react'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import { useForm } from 'react-hook-form';

export default function RegisterScreen() {
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();
      const submitHandler = ({ email, password }) => {
        console.log(email, password);
      };
  return (
    <Layout>
        <div>
        
      <form className="mx-auto max-w-screen-md"
      onSubmit={handleSubmit(submitHandler)}>
        <h1 className="mb-4 text-xl">Register</h1>
        <div className="mb-4">
          <label htmlFor="name">Username</label>
          <input
            type="text"
              className="w-full"
              id="name"
              autoFocus
            ></input>
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
                required: 'Please enter email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter valid email',
                },
              })}
              className="w-full"
              id="email"
              autoFocus
            ></input>
             {/* checking conditonal error */}
             {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
        </div>
        <div className="mb-4">
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
              className="w-full"
              id="number"
              autoFocus
            ></input>
            </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
                required: 'Please enter password',
                minLength: { value: 6, message: 'password is more than 5 chars' },
              })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">SignUp</button>
        </div>
        <div className="mb-4">
          <Link href="/LoginForm">Go back to Login Page</Link>
        </div>
      </form>
        </div>
    </Layout>
   
  )
}
