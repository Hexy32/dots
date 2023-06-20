import { MOUSE_RADIUS, OBJECT_SIZE } from '../utils/config'
import { useEffect, useRef, useState } from 'react'

import { GameObject } from './GameScreen'
import { random } from '../utils/random'

export default function MouseHitbox({
  runFromMouse,
  objectArr,
  setObjectArr,
}: {
  runFromMouse: boolean
  objectArr: GameObject[]
  setObjectArr: React.Dispatch<React.SetStateAction<GameObject[]>>
}) {
  const [mouseLocation, setMouseLocation] = useState<Location>({ x: 0, y: 0 })

  const elemRef = useRef(null)
  const setIntervalRef = useRef<number>()

  useEffect(() => {
    function getMousePosition(e: MouseEvent) {
      setMouseLocation({ x: e.x, y: e.y })
    }

    window.addEventListener('mousemove', getMousePosition)

    return () => window.removeEventListener('mousemove', getMousePosition)
  }, [])

  useEffect(() => {
    if (runFromMouse) {
      setIntervalRef.current = setInterval(moveDotsFromMouse)
    }

    function moveDotsFromMouse() {
      for (const i in objectArr) {
        const hitbox = elemRef.current as HTMLDivElement | null

        if (!hitbox) return

        const hitboxRect = hitbox.getBoundingClientRect()

        if (
          objectArr[i].location.x < hitboxRect.right &&
          objectArr[i].location.x > hitboxRect.left &&
          objectArr[i].location.y < hitboxRect.bottom &&
          objectArr[i].location.y > hitboxRect.top
        ) {
          const newObjectArr = [...objectArr]
          newObjectArr[i].location = {
            x: random(0, window.innerWidth - OBJECT_SIZE),
            y: random(0, window.innerHeight - OBJECT_SIZE),
          }
          setObjectArr(newObjectArr)
        }
      }
    }

    return () => clearInterval(setIntervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runFromMouse])

  return (
    <div
      ref={elemRef}
      className="mouse-hitbox"
      style={{
        left: mouseLocation.x,
        top: mouseLocation.y,
        width: MOUSE_RADIUS,
      }}></div>
  )
}

type Location = { x: number; y: number }
