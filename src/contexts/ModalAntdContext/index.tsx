import { Modal } from "antd";
import { AxiosError } from "axios";
import { StudentDto, StudentUpdateDto } from "components/List/index.types";
import { useNotification } from "hooks/useNotification";
import { createContext, useEffect, useState } from "react";
import { getStudentByRA } from "services/list-students.service";
import { useInternalModalAntdContext } from "./index.hook";
import { BackEndError, IModalAntd } from "./index.types";

import './style.css'

export const ModalAntdContext = createContext<IModalAntd>({} as any);

export function ModalAntdProvider({ children }: any) {

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [disabled, setDisabled] = useState(false)

  const [ra, setRa] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail]  = useState('');

  const { openNotificationWithIcon } = useNotification();

  const { handleUpdateStudent, handleCreateStudent } = useInternalModalAntdContext();

  async function handleGetStudent(ra: string) {
    try {
      const student: StudentDto = await getStudentByRA(ra);
  
      const { cpf, nome, email } = student
  
      setCpf(cpf);
      setNome(nome);
      setEmail(email);

      setVisible(true);
      
    } catch (error: any) {
      const axiosError: AxiosError = error;
      const err: BackEndError = axiosError.response?.data as any;
      
      return openNotificationWithIcon("error", err.error, err.message)
    }
  }

  function showModal(ra?: string) {
    if(ra && ra?.length > 0) {
      setRa(ra);
      setDisabled(true)
      handleGetStudent(ra)
      return;
    }

    setVisible(true);
  };

  async function handleOk() {
    setConfirmLoading(true);

    const sendStudent: StudentDto = { ra, cpf, nome, email }

    if (disabled) {

      const sendStudentUpdate: StudentUpdateDto = sendStudent;

      delete sendStudentUpdate.ra;
      delete sendStudentUpdate.cpf;

      await handleUpdateStudent(ra, sendStudentUpdate);
    } else {
      await handleCreateStudent(sendStudent);
    }
    


    setVisible(false);
    setConfirmLoading(false);
  };

  function handleCancel() {
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) {
      setRa('')
      setCpf('')
      setNome('')
      setEmail('')
      setDisabled(false)
    }
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
          <span className="content-email__invalid">{email.length > 0 && !email.includes('@') ? 'Invalid email' : ''}</span>
        </div>
      </Modal>
    </ModalAntdContext.Provider>
  );
}