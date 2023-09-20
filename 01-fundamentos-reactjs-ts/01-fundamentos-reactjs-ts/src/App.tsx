import {Post, PostType} from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from  './App.module.css';

import './global.css';

export function App() {


  const posts: PostType[] = [
    {
      id: 1,      
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/81938166?v=4",
        name: "Danillo Rezende",
        role: "Desenvolvedor",
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'jane.design/doctorcare<'},            
      ],
      publishedAt: new Date('2023-09-14 07:26:00')
    },
    {
      id: 2,      
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/81938166?v=4",
        name: "Mariana Arruda",
        role: "Analista Financeira",
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'jane.design/doctorcare<'},            
      ],
      publishedAt: new Date('2023-09-15 07:26:00')
    },
  ]
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
            return <Post
              key={post.id}
              post={post}
            />
          })}
          </main>
      </div>
    </>
  )
}

