"use client"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <User name={"Nirpendra"} />
      
      <button onClick={() => {
        alert('Hello')
      }} >Click</button>

    </main>
  )
}

const User = ({name}) => {
  return (
    <div>
      <h2>The user name is {name}</h2>
    </div>
  )
}