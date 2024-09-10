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
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
        
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
        
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
                    
                </div>
                </div>
            </main>
        </div>

        
    );
}

export default LogInCreatePage;