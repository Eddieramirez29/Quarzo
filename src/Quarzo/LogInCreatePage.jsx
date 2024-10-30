import styles from "./Log.module.css"
import googleIcon from "../assets/icons8-logo-de-google-48.png"
import facebookIcon  from "../assets/icons8-facebook-nuevo-48.png"
import { useState } from "react";


function LogInCreatePage()
{
  let [displayNameInput, setDisplayNameInput] = useState(1);//0 when is hidden

  const hideNameInputFunction = () =>
  {
    setDisplayNameInput(displayNameInput === 0 ? 1 : 0); //0 when is displayed
  }

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
                    Registrate con el correo electrónico</button>
                </div>

        <div className={styles.containerMain_logIn}>
          <p>Iniciar Sesión</p>
        

          <div className={styles.formContainer}>
            <form>

            {displayNameInput === 0 && (
              <>
                  <label htmlFor="email" className = {styles.containerMain_NameLabel}>Nombre</label>
                      <input type="email" placeholder="Tu nombre completo" className = {styles.containerMain_Name} name="name" required/>
              </> )}
              <label htmlFor="email" className = {styles.containerMain_EmailLabel}>Correo Electrónico</label>
                <input type="email" placeholder="Tu correo electrónico" className = {styles.containerMain_Email} name="email" required/>
              <label htmlFor="password" className = {styles.containerMain_EmailPassowrd}>Contraseña</label>
                <input type="password" placeholder="Tu contraseña" className = {styles.containerMain_Password} name="password" required />
                <a href="" className = {styles.containerMain_Forgotten}>¿Has olvidado la contraseña?</a>
              <button className = {styles.containerMain_ButtonLogIn} type="submit">
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