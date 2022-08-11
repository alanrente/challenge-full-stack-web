import { Modal } from "antd";
import { createContext } from "react";
import { useInternalModalAntdContext } from "./index.hook";
import { IModalAntd } from "./index.types";

import './style.css'

export const ModalAntdContext = createContext<IModalAntd>({} as any);

export function ModalAntdProvider({ children }: any) {

  const {
    visible,
    showModal,
    handleOk,
    remove,
    confirmLoading,
    handleCancel,
    disabled,
    ra,
    setRa,
    cpf,
    setCpf,
    nome,
    setNome,
    email,
    setEmail,
    verifyEmail
  } = useInternalModalAntdContext();

  return (
    <ModalAntdContext.Provider value={{showModal}}>
      {children}
      <Modal
        visible={visible}
        onOk={handleOk}
        okText={remove ? 'Sim' : ''}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText={remove ? 'Não': ''}
        closable={false}
      >
        {!remove ? (
        <div className="content-modal__inputs">
          <label htmlFor="content-ra">RA: </label>
          <input 
            type={'number'} 
            disabled={disabled} 
            value={ra} 
            id="content-ra" 
            onChange={(event) => {
              const value = event.target.value;
              if (value.length > 6) return;
              setRa(value)
            }} />
          <span>{ra.length}/6</span>

          <label htmlFor="content-cpf">CPF: </label>
          <input 
          type={'number'} 
          disabled={disabled} 
          value={cpf} 
          id="content-cpf" 
          onChange={(event) => {
            const value = event.target.value;
            if (value.length > 11) return;
            setCpf(event.target.value)
          }} />
          <span>{cpf.length}/11</span>

          <label htmlFor="content-nome">Nome: </label>
          <input id="content-nome" value={nome} onChange={(event) => setNome(event.target.value)} />
          <br />
          
          <label htmlFor="content-email">Email: </label>
          <input id="content-email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <span className="content-email__invalid">{email.length > 0 && verifyEmail(email) ? 'Invalid email' : ''}</span>
        </div>
        ) : (
          <>
            Deseja deletar o aluno?
          </>
        )}
      </Modal>
    </ModalAntdContext.Provider>
  );
}