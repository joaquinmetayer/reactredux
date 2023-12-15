import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { setUser } from '../reducers/user/userSlice';

export const Index = () => {
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    Axios.get("../../data/users.json")
      .then(response => {
        console.log(response.data.users)
        const users = response.data.users;
        const userToLog = users.find(user => user.email === emailField.current.value);

        if (userToLog) {
          if (userToLog.password === passwordField.current.value) {
            console.log("Valid credentials");
            dispatch(setUser({
              email: userToLog.email,
              fullName: `${userToLog.first_name} ${userToLog.last_name}`,
              token: Date.now(),
            }))
            navigate("/home");
          }
        }
      })
  }
  return (
    <div className="row ">
      <div className="col-6">
        <h2 className="mb-4">Login form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" ref={emailField} placeholder="test@test.com"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" ref={passwordField} placeholder="test" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}