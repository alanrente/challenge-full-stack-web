import { ModalAntdContext } from "contexts/ModalAntdContext"
import { useContext } from "react"

export function useModalAntdContext() {
  const context = useContext(ModalAntdContext)

  return context;
}