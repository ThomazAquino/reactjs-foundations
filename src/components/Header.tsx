import igniteLogo from '../assets/ignite-logo.svg'
import styles from './Header.module.css'
console.log('🚀 🚀 🚀  ~ igniteLogo', igniteLogo)


export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite logo" />
    </header>
  )
}