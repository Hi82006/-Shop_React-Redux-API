import React from 'react'
import UserSignupForm from './UserSignupForm';
import { useSelector } from 'react-redux';

const UserForm = () => {
    const { showForm } = useSelector(({ user }) => user);
  return (
    showForm ? <UserSignupForm /> : <></>
  )
}

export default UserForm;