import styles from './navbar.module.scss';
import SocialMedia from './socialMedia';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <nav className={styles.container_nav}>
            <ul className={styles.navigation}>
                <li><Link to="/"> Inicio </Link></li>
                <li> <Link to="/portfolio"> Portfólio</Link></li>
                <li> <a href="#about"> Sobre Nós </a></li>
                <li> <a href='#contact'>Contato </a></li>
            </ul>

            <SocialMedia />



        </nav>
    )
}

export default NavBar