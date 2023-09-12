import styles from './POst.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/81938166?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Danillo Rezende</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="12 de Setembro as 07:23h" dateTime="2023-09-12 07:26:00">Publicado há 1h</time>

            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉<a href=""> jane.design/doctorcare</a></p>

            <p>
                <a href=""> #novoprojeto </a>
                <a href="">#nlw </a>
                <a href="">#rocketseat</a>
            </p>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu Comentário</strong>
                <textarea 
                    placeholder='Deixe seu comentário'
                />
                <button type='submit'>Comentar</button>
            </form>
        </article>
    )
}