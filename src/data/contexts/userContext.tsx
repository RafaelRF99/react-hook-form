import { IUser } from '@/interface/IUser'
import { createContext, useState, useEffect, ReactNode } from 'react'

interface userContextProps {
  user: IUser | null
  setUser: (user: IUser | null) => void
  users: IUser[]
}

export const userContext = createContext<userContextProps>(null!)

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (user) {
      setUsers((prevUsers) => [...prevUsers, user])
    }
  }, [user])

  return (
    <userContext.Provider value={{ user, setUser, users }}>
      {children}
    </userContext.Provider>
  )
}
