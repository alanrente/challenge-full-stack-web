import { ContentModal } from 'components/ContentModal';
import { useModal } from './index.hook';
import './style.css'

export function Modal() {

  const { visible } = useModal();

  return (
    <>
      <div className={`modal-student ${ visible ? '' : 'not-visible' }`} />
      <div className={`modal-student__container ${ visible ? '' : 'not-visible' }`} >
        <ContentModal />
      </div>
    </>
  )
}