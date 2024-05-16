import type { FC } from 'react';

import type { HeaderComponentProps } from '@/interfaces';

import bascet from '../../assets/basket-icon.svg';
import line from '../../assets/line-icon.svg';
import login from '../../assets/login-icon.svg';
import logo from '../../assets/logo-icon.svg';
import menu from '../../assets/menu-icon.svg';
import moon from '../../assets/moon-icon.svg';
import sun from '../../assets/sun-icon.svg';
import userAdd from '../../assets/userAdd-icon.svg';

import styles from './header.module.css';

export const HeaderComponent: FC<HeaderComponentProps> = ({ quantityInCart, handlerSetActivePage }) => (
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
                <button onClick={() => handlerSetActivePage('about')} data-name="about">
                    About
                </button>
                <button onClick={() => handlerSetActivePage('product')} data-name="product">
                    Product
                </button>
            </nav>
            <div className={styles.group}>
                <div className={styles.group}>
                    <div className={styles.bascetWraper}>
                        <div className={styles.quantity}>{quantityInCart}</div>
                        <img className={styles.bascet} src={bascet} alt="basket icon" />
                    </div>
                    <img className={styles.menu} src={menu} alt="menu icon" />
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
);
