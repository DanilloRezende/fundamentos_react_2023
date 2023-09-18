/* eslint-disable react/prop-types */
import {ThumbsUp, Trash} from 'phosphor-react'

import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, OnDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state)=>{
        return state + 1});
    }

    function handleDeleteComment() {
        OnDeleteComment(content)
    }

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
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}