import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

import arrowImage from '../../assets/arrow.svg'

export function Form() {
  const [state, handleSubmit] = useForm('myyozglw')
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email enviado com sucesso!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Obrigado por entrar em contato!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Voltar ao topo
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Entre em contato a partir do formluário abaixo</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          placeholder="Deixe sua mensagem"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
