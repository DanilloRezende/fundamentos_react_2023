import {ThumbsUp, Trash} from 'phosphor-react'

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false }src="https://avatars.githubusercontent.com/u/81938166?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>       
                        <div className={styles.authorAndTime}>
                            <strong>Danillo Rezende</strong>
                            <time title='13 de Setembro ás 07:14hrs' dateTime="2023-07-13 07:14:00">
                                Cerca de 1h atrás
                            </time>
                        </div>               
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}