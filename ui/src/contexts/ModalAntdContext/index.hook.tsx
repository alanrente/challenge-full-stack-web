import { AxiosError } from "axios";
import { StudentDto, StudentUpdateDto } from "components/List/index.types";
import { useNotification } from "hooks/useNotification";
import { useEffect, useState } from "react";
import { createStudent, getStudentByRA, removeStudent, updateStudent } from "services/list-students.service";
import { BackEndError } from "./index.types";

export function useInternalModalAntdContext() {

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [remove, setRemove] = useState(false);

  const [ra, setRa] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail]  = useState('');

  const { openNotificationWithIcon } = useNotification()

  function handleReload() {
    setTimeout(() => {
      window.location.reload();
    }, 1000); 
  }

  async function handleCreateStudent(payload: StudentDto) {
    try {
      await createStudent(payload);

      handleReload();

      openNotificationWithIcon('success', "Aluno cadastrado")
    } catch (error: any) {
      const axiosError: AxiosError = error;
      const err: BackEndError = axiosError.response?.data as any;
      
      return openNotificationWithIcon("error", "Error", JSON.stringify(err.message[0]))
    }
  }

  async function handleUpdateStudent(ra: string, payload: StudentUpdateDto) {
    try {
      const retorno = await updateStudent(ra, payload);

      if (retorno) {
        openNotificationWithIcon('success', 'Aluno atualizado!', `Aluno ${retorno.nome} atualizado`);
        handleReload()
      }
    } catch (error: any) {
      const axiosError: AxiosError = error;
      const err: BackEndError = axiosError.response?.data as any;
      
      return openNotificationWithIcon("error", "Error", JSON.stringify(err.message[0]))
    }
  }

  async function handleRemoveStudent() {
    try {
      await removeStudent(ra);
      setVisible(false);
      handleReload();
      openNotificationWithIcon('success', "Aluno deletado!")
    } catch (error: any) {
      const axiosError: AxiosError = error;
      const err: BackEndError = axiosError.response?.data as any;
      
      return openNotificationWithIcon("error", "Error", JSON.stringify(err.message[0]))
    }
  }

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

  function showModal(ra?: string, remove?: boolean) {

    if (remove && ra) {
      setRa(ra);
      setRemove(remove);
      setVisible(true);
      return;
    }

    if(ra && ra?.length > 0) {
      setRa(ra);
      setDisabled(true)
      handleGetStudent(ra)
      return;
    }

    setVisible(true);
  };

  async function handleOk() {

    if (remove && ra) {
      await handleRemoveStudent();
      return;
    }

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

  function verifyEmail(email: string) {
    const hasAt = email.includes('@');
    const hasDot = email.includes('.')

    return !hasAt || !hasDot;
  }

  useEffect(() => {
    if (!visible) {
      setRa('');
      setCpf('');
      setNome('');
      setEmail('');
      setDisabled(false);
      setRemove(false);
    }
  }, [visible]);

  return {
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
  }
}