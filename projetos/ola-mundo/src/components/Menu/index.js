import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink pathname={'/'} linkName={'Inicio'}>
                </MenuLink>
                <MenuLink pathname={'/sobremim' } linkName={'Sobre Mim'}>
                </MenuLink>
            </nav>
        </header>
    )
}