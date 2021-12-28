import { Container } from "./styles";
import { useForm, ValidationError } from '@formspree/react';

export function Form(){


  const [state, handleSubmit] = useForm("myyozglw");
  
  return(
    <Container>
      <h2>Entre em contato a partir do formulário abaixo</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
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
    </Container>
  )
}