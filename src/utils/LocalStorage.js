
import { AppState } from '../AppState'

export function saveState() {
  localStorage.setItem('farming-clicker', JSON.stringify({ character: AppState.character }))
}

export function loadState() {
  const data = JSON.parse(localStorage.getItem('farming-clicker'))
  if (data) {
    // debugger
    AppState.character = data.character
  }
}
