
import { AppState } from '../AppState'

export function saveState() {
  localStorage.setItem('farming-clicker', JSON.stringify({
    character: AppState.character,
    time: AppState.time,
    optionsToBuy: AppState.optionsToBuy,
    ownedLands: AppState.ownedLands,
    smallFarms: AppState.smallFarms,
    mediumFarms: AppState.mediumFarms,
    largeFarms: AppState.largeFarms,
    monthlyCosts: AppState.monthlyCosts,
    tractors: AppState.tractors
  }))
}

export function loadState() {
  const data = JSON.parse(localStorage.getItem('farming-clicker'))
  if (data) {
    // debugger
    AppState.character = data.character
    AppState.time = data.time
    AppState.optionsToBuy = data.optionsToBuy
    AppState.ownedLands = data.ownedLands
    AppState.smallFarms = data.smallFarms
    AppState.mediumFarms = data.mediumFarms
    AppState.largeFarms = data.largeFarms
    AppState.monthlyCosts = data.monthlyCosts
    AppState.tractors = data.tractors
  }
}
