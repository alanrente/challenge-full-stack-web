import { Modal } from "antd";
import { createContext, useEffect, useState } from "react";
import { IModalAntd } from "./index.types";

export const ModalAntdContext = createContext<IModalAntd>({} as any);

export function ModalAntdProvider({ children }: any) {

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [disabled, setDisabled] = useState(false)

  const [ra, setRa] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail]  = useState('');

  function showModal(ra?: string) {
    if(ra && ra?.length > 0) {
      setRa(ra);
      setDisabled(true)
    }

    setVisible(true);
  };

  function handleOk() {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      console.log({
        ra, cpf, nome, email
      })
    }, 2000);
  };

  function handleCancel() {
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) setDisabled(false)
  }, [visible]);

  return (
    <ModalAntdContext.Provider value={{showModal}}>
      {children}
      <Modal
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        closable={false}
      >
        <div className="content-modal__inputs">
          <label htmlFor="content-ra">RA: </label>
          <input disabled={disabled} id="content-ra" onChange={(event) => setRa(event.target.value)} />

          <label htmlFor="content-cpf">CPF: </label>
          <input disabled={disabled} id="content-cpf" onChange={(event) => setCpf(event.target.value)} />

          <label htmlFor="content-nome">Nome: </label>
          <input id="content-nome" onChange={(event) => setNome(event.target.value)} />
          
          <label htmlFor="content-email">Email: </label>
          <input id="content-email" onChange={(event) => setEmail(event.target.value)} />
        </div>
      </Modal>
    </ModalAntdContext.Provider>
  );
}