import styles from './navbar.module.scss';


const NavBar = () => {

    return (
        <nav className={styles.container_nav}>
            <ul className=''>
                <li>Inicio</li>
                <li>Portfólio</li>
                <li> Contato</li>
                <li>Sobre nós</li>
            </ul>

            
        </nav>
    )
}

export default NavBar