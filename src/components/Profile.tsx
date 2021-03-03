import style from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/MrLopes-lab.png" alt="Marcelo"/>
      <div>
        <strong>Marcelo Lopes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 2
        </p>
      </div>
    </div>
  )
}