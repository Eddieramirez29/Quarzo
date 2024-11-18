import styles from "./Log.module.css"
import googleIcon from "../assets/icons8-logo-de-google-48.png"
import facebookIcon  from "../assets/icons8-facebook-nuevo-48.png"
import { useState } from "react";
import { db } from '../firebase'; // Asegúrate de que la configuración esté importada correctamente
import { collection, addDoc } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore



function LogInCreatePage()
{

  // Estado para manejar el valor del input de correo
  const [userName, setName] = useState('');
  const [userMail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  // Función para manejar el cambio en el input
  const handleChangeName = (e) =>
  {
    setName(e.target.value);  // Actualiza el estado con el valor del input
  };

  const handleChangeMail = (e) =>
  {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) =>
    {
        setPassword(e.target.value);
    };

  let [displayNameInput, setDisplayNameInput] = useState(1);//0 when is hidden

  const hideNameInputFunction = () =>
  {
    setDisplayNameInput(displayNameInput === 0 ? 1 : 0); //0 when is displayed
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
  
    try {
      // Agregar el nuevo documento a la colección "usuarios"
      const docRef = await addDoc(collection(db, 'usuarios'), {
        

        nombre: userName,  // Aquí usa las variables de estado que ya tienes
        correo: userMail,
        pass: userPassword
      });
  
      console.log("User ID:", docRef.id); // Verifica si se ha agregado correctamente
    } catch (error)
    {
      console.error('Error when adding user:', error);
    }
  };
  

  

    return(
      <main className = {styles.containerMain}>
        <header>
          <p className = {styles.containerMain_title}>Quarzo</p>
        </header>

                <section>
                <div className={styles.containerMain_register}>
                  <p className={styles.containerMain_register_policy}>
                    Al continuar indicas que aceptas las <a href="">condiciones de
                    servicio</a>
                    y las <a href="">políticas de privacidad</a> de Quarzo.
                  </p>

                  <button className = {styles.containerMain_ButtonGoogle} type="submit">
                  <img src={googleIcon} className = {styles.containerMain_GoogleIcon}  height={20} width={20} alt="" /> Continuar con Google</button>
                  <button className = {styles.containerMain_ButtonFacebook} type="submit">
                  <img src={facebookIcon} className = {styles.containerMain_FacebookIcon} height={20} width={20} alt="" />Seguir con Facebook</button>
                  <button onClick = {hideNameInputFunction} className = {styles.containerMain_ButtonSingUp} type="submit">
                    {displayNameInput === 0 ? "¿Ya estás registrado?"  : "Registrate con el correo electrónico"}
                          </button>
                </div>

        <div className={styles.containerMain_logIn}>
          <p>{displayNameInput === 0 ? "Registrarse" : "Iniciar sesión"}</p>
        

          <div className={styles.formContainer}>
            <form>

            {displayNameInput === 0 && (
              <>
                  <label htmlFor="email" className = {styles.containerMain_NameLabel}>Nombre</label>
                      <input type="email"  onChange={handleChangeName} placeholder="Tu nombre completo" className = {styles.containerMain_Name} name="name" required/>
              </> )}
              <label htmlFor="email" className = {styles.containerMain_EmailLabel}>Correo Electrónico</label>
                <input type="email" placeholder="Tu correo electrónico" onChange={handleChangeMail}
                className = {styles.containerMain_Email} name="email" required/>
              <label htmlFor="password" className = {styles.containerMain_EmailPassowrd}>Contraseña</label>
                <input type="password"  onChange={handleChangePass} placeholder="Tu contraseña" className = {styles.containerMain_Password} name="password" required />
                {displayNameInput === 0 && (<>
              <label htmlFor="password" className = {styles.containerMain_EmailPassowrdConfirm}>Confirmar contraseña</label>
                <input type="password"  placeholder="Vuelve a escribir tu contraseña" className = {styles.containerMain_PasswordConfirm} name="password" required />
              </> )}
                {displayNameInput === 1 && (<>
                    <a href="" className = {styles.containerMain_Forgotten}>¿Has olvidado la contraseña?</a>
                </> )}
              <button className = {styles.containerMain_ButtonLogIn} type="submit" 
              onClick = {handleSubmit}>
                  {displayNameInput === 0 ? "Registrarse" : "Iniciar sesión"}
              </button>
            </form>
          </div>
        </div>
        </section>
            </main>

        
    );
}

export default LogInCreatePage;