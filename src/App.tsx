import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';

import styles from './App.module.css';

function App() {
    return (
        <>
            <div className={styles.app}>
                <div className={styles.center}>
                    <HeaderComponent />
                    <main className={styles.home}>
                        <AboutComponent />
                    </main>
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default App;
