import { useEffect, useState } from 'react';

import { products } from '@/moc/moc';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProducstList } from './components/productsList/ProductsList.component.tsx';
import type { Id } from './interfaces/id.ts';
import type { Page } from './interfaces/page.ts';

import styles from './App.module.css';

function App() {
    const [activePage, setActivePage] = useState<Page>('about');
    const [generalCart, setGeneralCart] = useState<Array<Id>>([]);

    useEffect(() => {
        setGeneralCart(getLocalStorageCart);
        if (localStorage.getItem('activePage')) setActivePage(localStorage.getItem('activePage'));
    }, []);

    function getLocalStorageCart(): Id[] {
        if (!localStorage.getItem('generalCart')) return [];
        const localStorageCart = localStorage.getItem('generalCart')?.split(' ').map(Number);
        if (localStorageCart !== undefined && localStorageCart.every((item) => typeof item === 'number') && localStorageCart.length > 0) {
            return localStorageCart;
        }
        return [];
    }

    const setLocalStorageCart = (nextState: Id[]) => {
        localStorage.setItem('generalCart', nextState.join(' '));
    };

    const onClickCart = (id: Id) => {
        if (generalCart.includes(id)) {
            setGeneralCart((previousState) => {
                const nextState = previousState.filter((value) => value !== id);
                setLocalStorageCart(nextState);
                return nextState;
            });
        } else {
            setGeneralCart((previousState) => {
                const nextState = [...previousState, id];
                setLocalStorageCart(nextState);
                return nextState;
            });
        }
    };

    const handlerSetActivePage = (page: string) => {
        setActivePage(page);
        localStorage.setItem('activePage', page as string);
    };

    return (
        <>
            <div className={styles.app}>
                <div className={styles.center}>
                    <HeaderComponent quantityInCart={generalCart.length} handlerSetActivePage={handlerSetActivePage} />
                    <main className={styles.home}>
                        {activePage === 'about' && <AboutComponent />}
                        {activePage === 'product' && (
                            <ProducstList products={products} onClickCart={onClickCart} generalCart={generalCart} />
                        )}
                    </main>
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default App;
