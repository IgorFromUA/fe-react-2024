import { SocialLinks } from '../socialLink/SocialLinks.component';

import styles from './footer.module.css';

export function FooterComponent() {
    return (
        <footer className={`${styles.footer} ${styles.fullWidth}`}>
            <div className={`${styles.wrapper} ${styles.fullWidth}`}>
                <div className={styles.line}></div>
                <SocialLinks />
                <p className={styles.text}>
                    Made with 💗 on course ,{' '}
                    <a href="https://www.mastersacademy.education/frontend-for-beginners-it" className={styles.link}>
                        &#39;Intro to React&#39; from Masters Academy in 2024
                    </a>
                    , by Ihor
                </p>
            </div>
        </footer>
    );
}
