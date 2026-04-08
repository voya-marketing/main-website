import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// 🔥 REMOVE LOADER AFTER LOAD
window.addEventListener("load", () => {
  const loader = document.getElementById("initial-loader")

  if (loader) {
    // start hero reveal early
    document.body.classList.add("loaded")

    // loader cinematic exit
    loader.style.opacity = "0"
    loader.style.transform = "scale(1.08)"

    setTimeout(() => {
      loader.remove()
    }, 700)
  }
})
