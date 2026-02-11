import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggle"]

  connect() {
    // Récupérer le thème sauvegardé ou utiliser la préférence système
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const theme = savedTheme || (prefersDark ? "dark" : "light")
    this.applyTheme(theme)
  }

  toggle() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light"
    const newTheme = currentTheme === "light" ? "dark" : "light"
    this.applyTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    this.updateIcon(theme)
  }

  updateIcon(theme) {
    const icon = this.toggleTarget.querySelector("svg")
    if (theme === "dark") {
      icon.classList.remove("sun-icon")
      icon.classList.add("moon-icon")
    } else {
      icon.classList.remove("moon-icon")
      icon.classList.add("sun-icon")
    }
  }
}
