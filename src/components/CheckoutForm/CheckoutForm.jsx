import './CheckoutForm.css'
import { useState } from 'react'

export const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email, emailConfirm
        }

        onConfirm(userData)
    }

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <input className='Input'
                    type='text'
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className='Label'>
                    Teléfono
                    <input
                    className='Input'
                    type='text'
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className='Label'>
                    Email
                    <input
                    className='Input'
                    type='email'
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <label className='Label'>
                    Confirmar Email
                    <input
                    className='Input'
                    type='email'
                    value={emailConfirm}
                    onChange={({ target }) => setEmailConfirm(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='ButtonCO'>Crear Orden</button>
                </div>

            </form>
        </div>
    )
}