import { useEffect, useCallback } from "react"

/**
 * Generic modal. Pass `open`, `onClose`, and `children`.
 * Closes on ESC key or clicking the backdrop.
 */
function Modal({ open, onClose, children }) {
  const handleKey = useCallback(
    (e) => { if (e.key === "Escape") onClose() },
    [onClose]
  )

  useEffect(() => {
    if (!open) return
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [open, handleKey])

  if (!open) return null

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
