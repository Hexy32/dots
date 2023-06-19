import { useEffect, useRef, useState } from 'react'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as HTMLElement).contains(event.target as HTMLElement) &&
        buttonRef.current &&
        !(buttonRef.current as HTMLElement).contains(event.target as HTMLElement)
      ) {
        setIsOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <>
      <button ref={buttonRef} className="settings-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'close settings' : 'settings'}
      </button>
      {isOpen && (
        <div className="menu" ref={wrapperRef}>
          <div>
            <input type="checkbox" id="Moving" />
            <label htmlFor="Moving">Auto moving</label>
          </div>
        </div>
      )}
    </>
  )
}
