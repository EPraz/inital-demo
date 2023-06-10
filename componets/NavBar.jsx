import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

export const NavBar = () => {
    return (
        <nav className={styles['menu-container']}>
            <ActiveLink text="Home" href="/" />
            <ActiveLink text="About" href="/about" />
            <ActiveLink text="Contact" href="/contact" />
        </nav>
    )
}
