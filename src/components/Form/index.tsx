import styles from './Form.module.scss'

import { useForm } from 'react-hook-form'

import { useUser } from '@/data/hooks/useUser'
import { IUser } from '@/interface/IUser'

export default function Form() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IUser>()
  const { setUser } = useUser()

  function handleChange(data: any) {
    setUser(data)
    resetField('name')
    resetField('email')
    resetField('age')
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(handleChange)}>
      <div className={styles.content}>
        <div>
          <label>Nome</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name?.type ? <p>Campo obrigatório</p> : ''}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email?.type === 'required' ? <p>Campo obrigatório</p> : ''}
        </div>
        <div>
          <label>Idade</label>
          <input
            type="number"
            {...register('age', { required: true, min: '18' })}
          />
          {errors.age?.type === 'required' ? <p>Campo obrigatório</p> : ''}
          {errors.age?.type === 'min' ? <p>Não tem idade...</p> : ''}
        </div>
      </div>
      <div>
        <button>Enviar</button>
      </div>
    </form>
  )
}
