
import styles from '../styles/Header.module.css'
export default function Header() {
    return (
<div className={styles.Back} >

      <ul className={styles.NavBar}>
        <li className={styles.li}><a className={styles.lia} href="/">Acceuil</a></li>
        <li className={styles.li}><a className={styles.lia} href="/about">A propos</a></li>
        <li className={styles.li}><a className={styles.lia} href="/contact">Nous contacter</a></li>
        <li className={styles.li}><a className={styles.lia} href="/courses">Cours</a></li>

      </ul>

</div>

    )}
    
