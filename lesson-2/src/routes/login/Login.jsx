import { useState } from 'react'
import c from './login.module.css'
import { auth, provider } from '../../firebase/config';
import { Link, useHistory } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(response => {
      if(response){
        history.push("/explorenow");
      }
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  const loginWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => console.log(response))
      .catch(err => console.log(err.message))
  }

  return (
    <div className={c.login}>
      <Link className={c.home__link} to="/">HOME</Link>
      <form className={c.login__form} onSubmit={loginUser}>
        <input className={c.login__input} placeholder='Email' type="email" required onChange={(e) => setEmail(e.target.value)}/>
        <input className={c.login__input} placeholder='Password' type="password" required minLength={8} onChange={(e) => setPassword(e.target.value)}/>
        <button className={c.login__btn} type='submit'>Login</button>
      </form>
      <button className={c.login__withGoogle} onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login