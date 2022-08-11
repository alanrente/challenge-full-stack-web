import { Button } from 'components/Button'
import './style.css'

export function ContentModal() {



  function send(content?: string) {
    console.log( content || 'clicked')
  } 

  return (
    <div className="content-modal">
      <div className="content-modal__inputs">
        <label htmlFor="content-ra">RA: </label>
        <input id="content-ra" />

        <label htmlFor="content-cpf">CPF: </label>
        <input id="content-cpf" />

        <label htmlFor="content-nome">Nome: </label>
        <input id="content-nome" />
        
        <label htmlFor="content-email">Email: </label>
        <input id="content-email" />
      </div>

      <div className="content-modal__buttons">
        <Button onClick={() => send('cancelar')} cancelar>Cancelar</Button>
        <Button onClick={() => send()}>Salvar</Button>
      </div>
    </div>
  )
}