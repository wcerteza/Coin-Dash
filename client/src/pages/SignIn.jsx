import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/home')
  }

  return (
    <div className="main-register">
      <form className="register-form" onSubmit={handleSubmit}>
        <p className="title">Sign In</p>

        <label htmlFor="email">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="input"
            value={formValues.email}
            required
          />
          <span>Email</span>
        </label>

        <label htmlFor="password">
          <input
            onChange={handleChange}
            type="password"
            className="input"
            name="password"
            value={formValues.password}
            required
          />
          <span>Password</span>
        </label>

        <button
          className="submit"
          disabled={!formValues.email || !formValues.password}
        >
          Sign In
        </button>

        <p className="signin">
          Don't have an account yet? <a href="#">Create account here</a>
        </p>
      </form>
    </div>
  )
}

export default SignIn
