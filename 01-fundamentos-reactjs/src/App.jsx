import {Post} from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from  './App.module.css';

import './global.css';

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Danillo"
          contet="lorem ipsum dolor sit amet, consectetur adipiscing"
          />
          <Post 
          author="Mariana"
          contet="lorem ipsum dolor sit amet, consectetur adipiscing"
          />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          </main>
      </div>
    </>
  )
}

