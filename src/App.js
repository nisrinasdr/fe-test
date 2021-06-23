import logo from './img/logo-technopartner.png'
import './App.css';
import axios from "axios"
import { useHistory } from "react-router-dom";
import { useGlobalContext } from './Components/Context';

const App = () => {
  const {input, setInput, setToken} = useGlobalContext()
  const history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post', 
      url: 'https://soal.staging.id/oauth/token',
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        }, 
      data: {
        grant_type : "password",
        client_secret : "0a40f69db4e5fd2f4ac65a090f31b823",
        client_id : "e78869f77986684a",
        username : input.email,
        password : input.password,
      }
    }).then((response) =>{
      setToken(  {
        token_type: response.data.token_type,
        access_token: response.data.access_token, 
      })
      alert("login success!")
      history.push('/home')
    }).catch((error) =>{
        alert("wrong username/password")
        console.log(error)
    })
  }

  const handleChange = (e) => {
    setInput(
      {...input, [e.target.name]: e.target.value}
    )
  }
  
  return (
    <div className="container">
      <div className="login">
        <img src={logo} alt="logo" />
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label> <br />
            <input type="email" id="email" name="email" onChange={handleChange} value={input.email} /> <br />
            <label htmlFor="password">Password</label> <br />
            <input type="password" id="password" name="password" onChange={handleChange} value={input.password} /> <br />
            <input type="submit" value="Login" id="submit"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
