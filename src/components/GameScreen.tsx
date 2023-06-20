import '.././App.css'

import { OBJECT_SIZE } from '../utils/config'
import { random } from '../utils/random'

export default function GameScreen({ objectArr, setObjectArr }: MainGameInterface) {
  return (
    <div className="main-game">
      {objectArr.map((gameObject, i) => (
        <button
          onClick={() => {
            const x = random(0, window.innerWidth - OBJECT_SIZE)
            const y = random(0, window.innerHeight - OBJECT_SIZE)

            const newObjectArr = [...objectArr]

            newObjectArr[i].location = { x, y }

            setObjectArr(newObjectArr)
          }}
          key={i}
          id={'dot ' + i}
          className={gameObject.className}
          style={{
            width: OBJECT_SIZE,
            aspectRatio: 1,
            left: gameObject.location.x,
            top: gameObject.location.y,
          }}></button>
      ))}
    </div>
  )
}

interface MainGameInterface {
  objectArr: GameObject[]
  setObjectArr: React.Dispatch<React.SetStateAction<GameObject[]>>
}

export type GameObject = {
  visible: boolean
  className: string
  location: {
    x: number
    y: number
  }
}
