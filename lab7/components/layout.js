import Header from "../components/header.js";
import Footer from "../components/footer.js";
import styles from '../styles/Header.module.css'

export default function Layout({children}){
    return(
        <div className={styles.Back}>
            <Header/>
            {children}
            <Footer/>
         </div>
    )
}