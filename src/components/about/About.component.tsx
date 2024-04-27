import photo from '../../assets/photo-512-512.jpg';

import styles from './about.module.css';

export function AboutComponent() {
    return (
        <>
            <div className={`${styles.wrapper} ${styles.about}`}>
                <div className={styles['photo-wrapper']}>
                    <img className={styles.photo} src={photo} alt="foto"></img>
                </div>
                <div>
                    <h1 className={styles.title}>About me</h1>
                    <p className={styles.description}>
                        Hi! My name is Ihor and I&#39;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                        React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p className={styles.description}>
                        This page was developed during the course{' '}
                        <a
                            href="https://www.mastersacademy.education/frontend-for-beginners-it"
                            className={styles.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            &#39;Intro to React&#39;
                        </a>{' '}
                        from Masters Academy in 2024.
                    </p>
                    <p className={styles.description}>
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p className={styles.description}>
                        You can contact me via
                        <a href="https://www.linkedin.com/in/ihor-zapisochnyi-751b9424b/" target="_blank" rel="noreferrer">
                            {' '}
                            Linkedin
                        </a>{' '}
                        and check out my
                        <a href="https://github.com/IgorFromUA" target="_blank" rel="noreferrer">
                            {' '}
                            GitHub
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}
