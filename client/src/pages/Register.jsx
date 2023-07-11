import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !passwordRef.current.value ||
      (!confirmPasswordRef.current.value &&
        passwordRef.current.value !== confirmPasswordRef.current.value)
    ) {
      setError(true)
    } else {
      await RegisterUser({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      navigate('/signin')
    }
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              ref={nameRef}
              name="name"
              type="text"
              placeholder="John Smith"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="example@example.com"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" name="password" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              ref={confirmPasswordRef}
              type="password"
              name="confirmPassword"
            />
          </div>
          <button>Sign In</button>
        </form>
        {error ? <div>Please fill out all fields!</div> : null}
      </div>
    </div>
  )
}

export default Register
