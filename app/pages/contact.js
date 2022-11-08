
import styles from '../styles/Contact.module.css'
import Layout from '../components/layout.js'

export default function Home() {
    return (
        <Layout>
        <div className={styles.MainContainer}>
            <div className={styles.Container}>
                <div className={styles.TextSettings}>
                    <p className={styles.MainText}>Social NetWorks : </p>
                    <label  for="name">Instagram Guyon Benjamin &rarr; </label>
                    <a  href='https://www.instagram.com/guyonbenjamin'>
                        <img src='/logoinsta.png' alt="" width={20} height={20}></img>
                    </a>
                    <p></p>
                    <label  for="name">Instagram Garreta Titouan &rarr;  </label>
                    <a  href='https://www.instagram.com/titouan_garreta'>
                        <img src='/logoinsta.png' alt="" width={20} height={20}></img>
                    </a>
                    <p></p>
                    <a  href='https://github.com/Titcheur/WEB-TECH'>
                                        --Github--
                    </a>
                </div>
            </div>
            <div className={styles.Container}>
                <div className={styles.MainInputSettings}>
                <p className={styles.MainText}>Nous contacter : </p>
                    <label for="name">Nom : </label>
                    <input className={styles.inputSettings}  type="text" id="name" name="name" ></input>
                    <p></p>
                    <label for="name">Prénom : </label>
                    <input className={styles.inputSettings} type="text" id="name" name="name" ></input>
                    <p></p>
                    <label for="name">Adresse EMail : </label>
                    <input className={styles.inputSettings} type="email" id="name" name="name" ></input>
                    <p></p>
                    <label for="name">Votre message : </label>
                    <p></p>
                    <textarea name="ameliorer" id="ameliorer" rows="10" cols="50">
                        Votre message ...
                    </textarea> 
                </div>
            </div>
        </div>
        </Layout>
    )  
}