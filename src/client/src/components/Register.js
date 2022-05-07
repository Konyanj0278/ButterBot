// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Register() {

//     const [username, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordConfirm, setPasswordConfirm] = useState('');

//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/api/insert', {
//             username: username,
//             password: password,
//             passwordConfirm: passwordConfirm,
//         }).then((response) => {
//             if (response.data.fail) {
//                 if (response.data.fail.passFail) {
//                     alert(response.data.fail.passFail)
//                 }
//                 if (response.data.fail.userFail) {
//                     alert(response.data.fail.userFail)
//                     console.log("user fail")
//                 }
//             }
//             else {
//                 alert(response.data.pass)
//                 navigate('/')
//             }
//         })
//     }

//     return (
//         <div className="loginContainer">
//             <div className="wrapper">
//                 <h1>Register</h1>
//                 <br />
//                 <form>
//                     <label><b>Username</b>
//                         <input type="text"
//                             name="username"
//                             onChange={(e) => {
//                                 setUserName(e.target.value);
//                             }}
//                             placeholder="Username..." />
//                     </label>
//                     <br />
//                     <label><b>Password</b>
//                         <input type="password"
//                             name="password"
//                             onChange={(e) => {
//                                 setPassword(e.target.value);
//                             }}
//                             placeholder="Password..." />
//                     </label>
//                     <br />
//                     <label><b>Confirm Password</b>
//                         <input type="password"
//                             name="passwordConfirm"
//                             onChange={(e) => {
//                                 setPasswordConfirm(e.target.value);
//                             }}
//                             placeholder="Password..." />
//                     </label>
//                     <br />
//                     <button type="submit"
//                         onClick={handleSubmit}
//                         className="btn">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
