// import { useEffect, useState } from 'react';
// import { IMaskInput } from 'react-imask';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import styles from './styles.module.scss';
// import {
//   AtSymbolIcon,
//   KeyIcon,
//   EyeIcon,
//   EyeSlashIcon,
//   UserIcon,
// } from '@heroicons/react/24/outline';
// import { registerApi } from 'services/authApi';

// export default function Registration({ register }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [nameValid, setNameValid] = useState(false);
//   const [emailValid, setEmailValid] = useState(false);
//   const [passwordValid, setPasswordValid] = useState(false);
//   const [isAuth, setIsAuth] = useState(false);

//   const nameRegex = /[а-яА-Яa-zA-Z]{3,}/;
//   const passwordRegex = /^.{6,}$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const handleSubmit = e => {
//     e.preventDefault();
//     // const data = { name, email, password };

//     checkData();
//   };

//   const checkData = () => {
//     if (!passwordRegex.test(password)) {
//       toast.warn('Password must have been 6 charge');
//       return;
//     }
//     if (!emailRegex.test(email)) {
//       toast.warn('Email must have been correct');
//       return;
//     }
//     if (!nameRegex.test(name)) {
//       toast.warn('Name must have been 3 charge');
//       return;
//     } else {
//       const data = { name, email, password };
//       // register(data);
//       registerApi(data);
//       reset();
//       setIsAuth(true);
//     }
//   };

//   const reset = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   const navigate = useNavigate();

//   useEffect(() => {
//     isAuth && navigate('/login');
//   }, [isAuth, navigate]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.box}>
//           <div className={styles.parent}>
//             <h1 className={styles.heading}>Registration User</h1>
//             <div className={styles.inputBox}>
//               <input
//                 className={!nameValid ? styles.inputred : styles.input}
//                 placeholder="John"
//                 type="text"
//                 value={name}
//                 onChange={e => {
//                   nameRegex.test(e.target.value)
//                     ? setNameValid(true)
//                     : setNameValid(false);
//                   setName(e.target.value);
//                 }}
//               />
//               <UserIcon className={styles.inputIcn} />
//               {/* <p>{errors.name?.message}</p> */}
//             </div>
//             <div className={styles.inputBox}>
//               <input
//                 className={!emailValid ? styles.inputred : styles.input}
//                 placeholder="john@example.com"
//                 value={email}
//                 type="email"
//                 onChange={e => {
//                   emailRegex.test(e.target.value)
//                     ? setEmailValid(true)
//                     : setEmailValid(false);
//                   setEmail(e.target.value);
//                 }}
//               />
//               {/* <p>{errors.email?.message}</p> */}
//               <AtSymbolIcon className={styles.inputIcn} />
//             </div>
//             <div className={styles.inputBox}>
//               <IMaskInput
//                 mask={'****************'}
//                 className={!passwordValid ? styles.inputred : styles.input}
//                 placeholder="password"
//                 type={!showPassword ? 'password' : 'text'}
//                 value={password}
//                 onChange={e => {
//                   passwordRegex.test(e.target.value)
//                     ? setPasswordValid(true)
//                     : setPasswordValid(false);
//                   setPassword(e.target.value);
//                 }}
//               />
//               {/* <p>{errors.password?.message}</p> */}
//               <KeyIcon className={styles.inputIcn} />
//               <div
//                 className={styles.eyeShow}
//                 onClick={() => setShowPassword(!showPassword)}
//               ></div>
//               {!showPassword && <EyeIcon className={styles.inputIcnRight} />}
//               {showPassword && (
//                 <EyeSlashIcon className={styles.inputIcnRight} />
//               )}
//             </div>
//             <div className={styles.btnRegbox}>
//               <button type="submit" className={styles.btnReg}>
//                 Register
//               </button>
//             </div>
//             <div className={styles.linksBox}>
//               <a className={styles.linksLogin} href="/login">
//                 Login
//               </a>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
