import styles from "./Log.module.css"

function LogInCreatePage()
{
    return(
        <div className={styles.pageContainer}>
            <img className = {styles.containerBackgroundImage} src="../Quarzo.webp" alt="" />
            <main className = {styles.containerMain}>
                <p className = {styles.containerMain_title}>Quarzo</p>
            </main>
        </div>

        
    );
}

export default LogInCreatePage;