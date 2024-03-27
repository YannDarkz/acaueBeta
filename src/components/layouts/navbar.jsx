import styles from './navbar.module.scss';
import SocialMedia from './socialMedia';


const NavBar = () => {

    return (
        <nav className={styles.container_nav}>
            <ul className={styles.navigation}>
                <li>Inicio</li>
                <li>Portfólio</li>
                <li> Contato</li>
                <li>Sobre nós</li>
            </ul>

            <SocialMedia />



        </nav>
    )
}

export default NavBar