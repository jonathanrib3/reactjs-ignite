import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar"

function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar name="Macaco Edinilson" job="CEO do Racismo 2"/>
        <main>
          <Post author="O Doutor Sexo" content="September 28th" />
        </main>
      </div>
    </div>
  )
}

export default App

