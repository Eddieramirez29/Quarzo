import styles from "./Log.module.css"

function LogInCreatePage()
{
    return(
        <div className={styles.pageContainer}>
            <img className = {styles.containerBackgroundImage} src="../Quarzo.webp" alt="" />
            <main className = {styles.containerMain}>
                <p className = {styles.containerMain_title}>Quarzo</p>
                <div className = {styles.containerMain_subContainer}>
                <div className={styles.containerMain_register}>Hi</div>
        <div className={styles.containerMain_logIn}>
        <div className="form-container">
            <form>
              <label htmlFor="email" className = {styles.containerMain_EmailLabel}>Correo Electrónico</label>
                <input type="email" placeholder="Tu correo electrónico" className = {styles.containerMain_Email} name="email"required/>
              <label htmlFor="password" className = {styles.containerMain_EmailPassowrd}>Contraseña</label>
                <input type="password" placeholder="Tu contraseña" className = {styles.containerMain_Password} name="password" required />
                <a href="" className = {styles.containerMain_Forgotten}>¿Has olvidado la contraseña</a>
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