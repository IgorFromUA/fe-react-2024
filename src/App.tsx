import React, { useEffect, useState } from 'react';

import { AboutComponent } from './components/about/About.component.tsx';
import { FooterComponent } from './components/footer/Footer.component.tsx';
import { HeaderComponent } from './components/header/Header.component.tsx';
import { ProducstList } from './components/productsList/ProductsList.component.tsx';

import styles from './App.module.css';

type Page = string | null;
type Id = number;

function App() {
    const [activePage, setActivePage] = useState<Page>('about');
    const [generalCart, setGeneralCart] = useState<Array<Id>>([]);

    useEffect(() => {
        setGeneralCart(getLocalStorageCart);
        setActivePage(localStorage.getItem('activePage'));
    }, []);

    function getLocalStorageCart(): Id[] {
        if (!localStorage.getItem('generalCart')) return [];
        const localStorageCart = localStorage.getItem('generalCart')?.split(' ').map(Number);
        if (
            Array.isArray(localStorageCart) &&
            localStorageCart.every((item) => typeof item === 'number') &&
            localStorageCart !== undefined &&
            localStorageCart.length > 0
        ) {
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

    const handlerSetActivePage = ({ currentTarget }: React.MouseEvent) => {
        const page = currentTarget.getAttribute('name');
        setActivePage(() => {
            localStorage.setItem('activePage', page as string);
            return page;
        });
    };

    return (
        <>
            <div className={styles.app}>
                <div className={styles.center}>
                    <HeaderComponent quantityInCart={generalCart.length} handlerSetActivePage={(event) => handlerSetActivePage(event)} />
                    <main className={styles.home}>
                        {activePage === 'about' && <AboutComponent />}
                        {activePage === 'product' && <ProducstList onClickCart={onClickCart} generalCart={generalCart} />}
                    </main>
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default App;
