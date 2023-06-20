import './App.css'

import GameScreen, { GameObject } from './components/GameScreen'
import { OBJECT_SIZE, TIME_BETWEEN_MOVES } from './utils/config'
import { useEffect, useRef, useState } from 'react'

import Menu from './components/Menu'
import MouseHitbox from './components/MouseHitbox'
import { random } from './utils/random'

function App() {
  const [objectArr, setObjectArr] = useState<GameObject[]>(createDefaultObjects(300))
  const [autoMove, setAutoMove] = useState(false)
  const [runFromMouse, setRunFromMouse] = useState(false)
  const timeoutRef = useRef<number>()

  function createDefaultObjects(objectCount: number) {
    const final = []

    for (let x = 0; x < objectCount; x++) {
      final.push({
        visible: true,
        className: 'square-one',
        location: {
          x: random(0, window.innerWidth - OBJECT_SIZE),
          y: random(0, window.innerHeight - OBJECT_SIZE),
        },
      })
    }

    return final
  }

  useEffect(() => {
    let i = 0

    function clickOne() {
      if (!autoMove) return

      const newObjectArr = [...objectArr]

      newObjectArr[i].location = {
        x: random(0, window.innerWidth - OBJECT_SIZE),
        y: random(0, window.innerHeight - OBJECT_SIZE),
      }

      setObjectArr(newObjectArr)

      i++

      timeoutRef.current = setTimeout(() => {
        if (i < objectArr.length) {
          clickOne()
        } else {
          i = 0
          clickOne()
        }
      }, TIME_BETWEEN_MOVES)
    }

    clickOne()

    return () => clearTimeout(timeoutRef.current)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoMove, runFromMouse])

  return (
    <>
      <Menu
        autoMove={autoMove}
        setAutoMove={setAutoMove}
        runFromMouse={runFromMouse}
        setRunFromMouse={setRunFromMouse}
      />
      <GameScreen objectArr={objectArr} setObjectArr={setObjectArr} />
      <MouseHitbox runFromMouse={runFromMouse} objectArr={objectArr} setObjectArr={setObjectArr} />
    </>
  )
}

export default App
