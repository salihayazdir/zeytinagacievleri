import React, {useState} from 'react'
import { send } from '@emailjs/browser'

function ContactForm() {
    const [formData, setFormData] = useState({ username: '', email: '',message: '', phone: '' })
    const [formState, setFormState] = useState({ isSent: false, isFailed: false, isLoading: false})

    const handleChange = (e) => {
        setFormData(
          {...formData,
            [e.target.name]: e.target.value}
        )
      }
    
    const handleSubmit =  (e) => {
        const { username, email, message, phone } = formData
        e.preventDefault();
    
        send(
          process.env.GATSBY_EMAILJS_SERVICE_ID,
          process.env.GATSBY_EMAILJS_TEMPLATE_ID,
          { username, email, message, phone },
          process.env.GATSBY_EMAILJS_PUBLIC_KEY,
         )
          .then((response) => {
            console.log('SUCCESS', response.status, response.text)
            response.status === 200 && setFormState({...formState, isLoading: false, isSent: true})
          })
          .catch((err) => {
            console.log('FAIL', err)
            setFormState({ ...formState, isLoading: false, isSent: true, isFailed: true })
          })

          setFormData({ username: '', email: '',message: '', phone: '' })
          setFormState({ ...formState, isLoading: true })
    }

    const fieldStyles = 'py-2 border-b border-bej'
  
    return (
    <div className='p-6'>
        <h2 className='text-xl font-bold'>İletişim Formu</h2>
        <p className='mt-2 text-slate-500'>
            Size en kısa süre içinde ulaşabilmemiz için iletişim formunu doldurarak bilgilerinizi iletebilirsiniz.
        </p>
        <form
        name="contact" onSubmit={handleSubmit}
        className='mt-4 flex flex-col text-lg gap-2 bg-white'>
            <input
                id='username' type='text' name='username' placeholder='İsminiz' required
                onChange={handleChange} value={formData.username}
                className={`${fieldStyles}`}
            />
            <input
                id='email' type='email' name='email' placeholder='E-posta Adresiniz' required
                onChange={handleChange} value={formData.email}
                className={`${fieldStyles}`}
            />
            <input
                id='phone' type='text' name='phone' placeholder='Telefon Numaranız' required
                onChange={handleChange} value={formData.phone}
                className={`${fieldStyles}`}
            />
            <input
                id='message' type='text' name='message' placeholder='Mesajınız' required
                onChange={handleChange} value={formData.message}
                className={`${fieldStyles}`}
            />
            <button type='submit'
                className='bg-yesil text-acikbej font-bold py-4 rounded-md mt-6'
                >Gönder
            </button>
        </form>

        {formState.isLoading && (
                <div
                // className='bg-yellow rounded-full h-4 w-4 mt-12 ml-12'
                // animate={{ x: [-20, 20], y: [0, -30], 
                //     transition: { 
                //         x: { yoyo: Infinity, duration: 0.8, ease: 'easeInOut' },
                //         y: { yoyo: Infinity, duration: 0.2, ease: [0.6, 0.01, -0.05, 0.95], } 
                //     }}}
                    >Mesajınız Gönderiliyor...
                </div>
            )}

        {formState.isSent && (
            <div 
            // variants={containerVariants}
            // initial="hidden"
            // animate="visible"
            // exit="exit"
            // className={`px-6 py-4 text-left text-2xl outline outline-2 outline-black bg-green-500 text-white ${formState.isFailed && 'bg-red-500'}`}
            >
                <div className={`text-center font-bold p-6 rounded-md mt-4 text-white ${formState.isFailed ? 'bg-red-500' : 'bg-green-500' }`}>
                {!formState.isFailed ? ('Mesajınız iletildi. Kısa süre içinde sizler ile iletişim kuracağız.') : ('Bir hata meydana geldi.')}</div>
                <button className='w-full underline font-bold mt-2 uppercase'
                onClick={() => setFormState({...formState, isSent: false, isFailed: false})}>
                    {formState.isFailed && 'Tekrar Dene'}
                </button>
            </div>
        )}
    </div>
  )
}

export default ContactForm