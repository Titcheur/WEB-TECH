
import styles from '../styles/Header.module.css'
export default function Header() {
    return (
<div className={styles.Back} >

      <ul className={styles.NavBar}>
        <li className={styles.li}><a className={styles.lia} href="/">Home</a></li>
        <li className={styles.li}><a className={styles.lia} href="/about">About</a></li>
        <li className={styles.li}><a className={styles.lia} href="/contact">Contact</a></li>
        <li className={styles.li}><a className={styles.lia} href="/courses">Courses</a></li>

      </ul>

</div>

    )}
    
