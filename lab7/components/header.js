
import Link from 'next/link'
import { useEffect, useState } from 'react'
//import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'

//import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/profile')
      const profile = await response.json()
      setProfile(profile)
    }
    fetchData()
  }, [])
    return (
<div className={styles.Back} >

      <ul className={styles.NavBar}>
        <li className={styles.li}><a className={styles.lia} href="/">Acceuil</a></li>
        <li className={styles.li}><a className={styles.lia} href="/about">A propos</a></li>
        <li className={styles.li}><a className={styles.lia} href="/contact">Nous contacter</a></li>
        <li className={styles.li}><a className={styles.lia} href="/courses">Cours</a></li>
        { profile && (
          <li className={styles.li}>
            <a  className={styles.lia2}href="./api/profile">
                {profile.username}
            </a>
          </li>)}
      </ul>

</div>
    )
}
    
