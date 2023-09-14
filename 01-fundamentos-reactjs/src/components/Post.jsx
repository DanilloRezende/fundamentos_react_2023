/* eslint-disable react/prop-types */
import styles from './POst.module.css';
import {Comment} from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post( {author, publishedAt, content} ) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {locale:ptBR, })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.authorAvatar} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted}dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>

            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p><a href=''>{line.content}</a></p>
                    }
                })}
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu Comentário</strong>
                <textarea 
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}