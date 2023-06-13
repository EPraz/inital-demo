import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'About',
        href: '/about',
    },
    {
        text: 'Contact',
        href: '/contact',
    },
    {
        text: 'Pricing',
        href: '/pricing',
    },
]

export const NavBar = () => {
    return (

        <nav className={styles['menu-container']}>
            {menuItems.map((menu, index) => {
                return (
                    <ActiveLink text={menu.text} href={menu.href} key={index} />
                )
            })}
        </nav>
        // <nav className={styles['menu-container']}>
        //     <ActiveLink text="Home" href="/" />
        //     <ActiveLink text="About" href="/about" />
        //     <ActiveLink text="Contact" href="/contact" />
        //     <ActiveLink text="Pricing" href="/pricing" />
        // </nav>
    )
}
