import styles from './Sidebar.module.css';

import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
                alt="" 
                />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/81938166?v=4"/>

                <strong>Danillo Rezende</strong>
                <span>Dev</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}