import { Header } from 'components/Header'
import { List } from 'components/List'
import { Modal } from 'components/Modal'
import './index.style.css'

export function Students(){

  return <div className='students'>
    <Header />
    <List />
    <Modal />
  </div>
}