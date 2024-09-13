import styles from "./Log.module.css"
import googleIcon from "../assets/icons8-logo-de-google-48.png"
import facebookIcon  from "../assets/icons8-facebook-nuevo-48.png"
import Quarzo from "../assets/Quarzo.webp"

function LogInCreatePage()
{
    return(
        <div className={styles.pageContainer}>
            <img className = {styles.containerBackgroundImage} src = {Quarzo} alt="" />
            <main className = {styles.containerMain}>
                <p className = {styles.containerMain_title}>Quarzo</p>
                <div className = {styles.containerMain_subContainer}>
                  
                <div className={styles.containerMain_register}>
                  <p className={styles.containerMain_register_policy}>
                  Al continuar indicas que aceptas las condiciones de
                  servicio y la política de privacidad de Quarzo.
                  </p>

                  <button className = {styles.containerMain_ButtonGoogle} type="submit">
                   <img src={googleIcon} className = {styles.containerMain_GoogleIcon}  height={20} width={20} alt="" /> Continuar con Google</button>
                  <button className = {styles.containerMain_ButtonFacebook} type="submit">
                  <img src={facebookIcon} className = {styles.containerMain_FacebookIcon} height={20} width={20} alt="" />Seguir con Facebook</button>
                  <button className = {styles.containerMain_ButtonSingUp} type="submit">
                  Registrate con el correo electrónico</button>

                </div>
        <div className={styles.containerMain_logIn}>
          <p>Iniciar Sesión</p>
        <hr className={styles.containerMain_logIn_upperbar} />

        <div className="form-container">
            <form>
              <label htmlFor="email" className = {styles.containerMain_EmailLabel}>Correo Electrónico</label>
                <input type="email" placeholder="Tu correo electrónico" className = {styles.containerMain_Email} name="email"required/>
              <label htmlFor="password" className = {styles.containerMain_EmailPassowrd}>Contraseña</label>
                <input type="password" placeholder="Tu contraseña" className = {styles.containerMain_Password} name="password" required />
                <a href="" className = {styles.containerMain_Forgotten}>¿Has olvidado la contraseña?</a>
              <button className = {styles.containerMain_ButtonLogIn} type="submit">Iniciar Sesión</button>
            </form>
        </div>
        </div>
        </div>
            </main>
        </div>

        
    );
}

export default LogInCreatePage;