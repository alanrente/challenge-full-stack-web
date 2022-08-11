import { StudentUpdateDto } from "components/List/index.types";
import { useNotification } from "hooks/useNotification";
import { updateStudent } from "services/list-students.service";

export function useInternalModalAntdContext() {

  const { openNotificationWithIcon } = useNotification()

  function handleReload() {
    setTimeout(() => {
      window.location.reload();
    }, 1000); 
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
    handleUpdateStudent
  }
}