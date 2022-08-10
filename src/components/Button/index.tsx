import './style.css'

export function Button() {

  function clickButton(){
    console.log('clicked')
  }

  return <button className="button-student" onClick={clickButton}/>
}