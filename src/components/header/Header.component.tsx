import bascet from '../../assets/basket-icon.svg';
import line from '../../assets/line-icon.svg';
import login from '../../assets/login-icon.svg';
import logo from '../../assets/logo-icon.svg';
import menu from '../../assets/menu-icon.svg';
import moon from '../../assets/moon-icon.svg';
import sun from '../../assets/sun-icon.svg';
import userAdd from '../../assets/userAdd-icon.svg';

import styles from './header.module.css';

export function HeaderComponent() {
    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.wrapper} ${styles.headerConteiner}`}>
                    <div className={styles.group}>
                        <img className={styles.logo} src={logo} alt="logo"></img>
                        <ul className={styles.themes}>
                            <li>
                                <img src={sun} alt="light theme" />
                            </li>
                            <li>
                                <img src={line} alt="line" />
                            </li>
                            <li>
                                <img src={moon} alt="dark theme" />
                            </li>
                        </ul>
                    </div>
                    <nav className={styles.nav}>
                        <a href="#">About</a>
                        <a href="#">Product</a>
                    </nav>
                    <div className={styles.group}>
                        <div className={styles.group}>
                            <img className={styles.bascet} src={bascet} alt="basket icon"></img>
                            <img className={styles.menu} src={menu} alt="menu icon"></img>
                        </div>
                        <ul className={styles.authButtons}>
                            <li>
                                <button className={styles.authButtonLogin}>
                                    <img src={login} alt="login icon" />
                                    Login
                                </button>
                            </li>
                            <li>
                                <button className={styles.authButtonUserAdd}>
                                    <img src={userAdd} alt="user add icon" />
                                    Sing up
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
