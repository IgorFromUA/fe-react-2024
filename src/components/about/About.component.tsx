import styles from './about.module.css';

export function AboutComponent() {
    return (
        <>
            <div className={styles.about}>
                <img className={styles.foto} src="/src/assets/foto-512-512.jpg" alt="foto"></img>
                <div>
                    <h1 className={styles.title}>About me</h1>
                    <p className={styles.description}>
                        Hi! My name is Ihor and I&#39;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                        React, HTML, CSS, JavaScript and Git version control system. This page was developed during the course &lsquo;Intro
                        to React&rsquo; from Masters Academy in 2024. This is a social project from MOCG company where I got an opportunity
                        to work with Frontend mentors and to create my own small project for the portfolio. You can contact me via
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
