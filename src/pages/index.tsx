import styles from '../styles/Home.module.scss'

import { Inter } from 'next/font/google'

import Form from '@/components/Form'
import { useUser } from '@/data/hooks/useUser'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { users } = useUser()

  function renderUsers() {
    return users.map((user, i) => {
      return (
        <div key={i} style={{ border: '1px solid #FFF', padding: '5px' }}>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Idade: {user.age}</p>
        </div>
      )
    })
  }

  return (
    <main className={`${inter.className} ${styles.container}`}>
      <h1>Formulário</h1>
      <div>
        <Form />
      </div>
      <div className={styles.list}>{renderUsers()}</div>
    </main>
  )
}
