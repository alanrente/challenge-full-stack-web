import { AxiosError } from "axios";
import { StudentDto, StudentUpdateDto } from "components/List/index.types";
import { useNotification } from "hooks/useNotification";
import { createStudent, updateStudent } from "services/list-students.service";
import { BackEndError } from "./index.types";

export function useInternalModalAntdContext() {

  const { openNotificationWithIcon } = useNotification()

  function handleReload() {
    setTimeout(() => {
      window.location.reload();
    }, 1000); 
  }

  async function handleCreateStudent(payload: StudentDto) {
    try {
      const retorno = await createStudent(payload);

      handleReload();
      console.log(retorno);
    } catch (error: any) {
      console.log("error", error);
      const axiosError: AxiosError = error;
      console.log("axiosError", axiosError);
      const err: BackEndError = axiosError.response?.data as any;
      console.log("err", err)
      
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
    } catch (error) {
      console.log('error', error)
    }
  }

  return {
    handleUpdateStudent,
    handleCreateStudent
  }
}