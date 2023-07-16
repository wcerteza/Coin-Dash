import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <div className="main-register">
      <form className="register-form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>

        <label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="input"
            placeholder=""
            value={formValues.name}
            required
          />
          <span>Name</span>
        </label>

        <label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="input"
            placeholder=""
            value={formValues.email}
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="input"
            placeholder=""
            value={formValues.password}
            required
          />
          <span>Password</span>
        </label>

        <label>
          <input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            className="input"
            placeholder=""
            value={formValues.confirmPassword}
            required
          />
          <span>Confirm password</span>
        </label>

        <button
          className="submit"
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
        >
          Submit
        </button>

        <p className="signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </div>
  )
}

export default Register
