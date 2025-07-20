import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MunuLink({pathname, linkName}) {
    const localizacao = useLocation(); 
    return (
        <div>
        <Link className= {`${styles.link} ${localizacao.pathname === pathname ? styles.linkDestacado : ""}`} to={pathname}>
            {linkName}
        </Link>
        </div>
    )
}