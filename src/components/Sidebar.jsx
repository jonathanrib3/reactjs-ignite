import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.module.css"


export function Sidebar({name, job}) {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover} 
      src="https://i.scdn.co/image/ab67616d0000b27361595736954fdccc099bd22e" />
    
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://media.discordapp.net/attachments/535331541795209227/984460637881114624/FPb1CGPWQAQMkXV.jpeg?width=600&height=670" />
        <strong>{name}</strong>
        <span>{job}</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}