
import styles from '../styles/About.module.css'
import Layout from '../components/layout.js'

export default function () {
  return (
    <Layout>
    <div className={styles.MainContainer}>
        <div className={styles.Container}>
            <p>Information sur la coloc </p>
        </div>
        <div className={styles.Container}>
                <div className={styles.Container2}>
                <img  className={styles.img} src='/benjaminPhoto.jpg' width={250} height={250}></img>
                <p className={styles.text}> -Benjamin Guyon</p>
                <p className={styles.text}> -21 ans</p>
                <p className={styles.text}> -Etudiant en Systeme d'information section Internationale</p>
                
                </div>
        
                <div className={styles.Container2}>
                <img  className={styles.img} src='/titouanPhoto.jpg' width={250} height={250}></img>
                <p className={styles.text}> -Titoaun Garreta</p>
                <p className={styles.text}> -21 ans</p>
                <p className={styles.text}> -Etudiant en Systeme d'information section Internationale</p>
                </div>
        </div>
        <div className={styles.Container}>
                <div className={styles.Container2}>
                  <p>Localisation de la coloc :</p>
                  <iframe className={styles.center} src="https://www.google.com/maps/d/embed?mid=1e4oB0a2vY-lK-y5c1Xr6MheO314qZVo&ehbc=2E312F" width="640" height="480"></iframe>
                </div>
        </div>
    </div>
    </Layout>
  )
}
