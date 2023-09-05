import { userContext } from '../contexts/userContext'
import { useContext } from 'react'

export const useUser = () => useContext(userContext)
