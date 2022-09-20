import styles from "./Header.module.css"
import logo from "../assets/Ignite simbol.png"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo}/>
      <strong>Creepy Feed</strong>
    </header>
  )
}