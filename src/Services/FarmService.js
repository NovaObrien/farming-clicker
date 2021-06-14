import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class FarmService {
  setTractor(owned) {
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    const bool = AppState.ownedLands[index].tractorActive

    if (AppState.tractors > 0 && bool === false) {
      AppState.ownedLands[index].tractorActive = true
      AppState.tractors--
      saveState()
    } else if (bool === true) {
      AppState.ownedLands[index].tractorActive = false
      AppState.tractors++
      saveState()
    }
  }

  // happens when you sell tractor
  returnTractor(owned) {
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    const bool = AppState.ownedLands[index].tractorActive
    if (bool === true) {
      AppState.ownedLands[index].tractorActive = false
      AppState.tractors++
    }
  }

  tend(owned) {
    if (owned.tended < owned.acers) {
      const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
      let tended = AppState.ownedLands[index].tended
      tended += AppState.character.children + 1

      if (tended > owned.acers) {
        AppState.ownedLands[index].tended = owned.acers
        saveState()
      } else {
        AppState.ownedLands[index].tended = tended

        const mod = tended % 10
        if (mod === 0 || mod === 5) {
          saveState()
        }
      }
    }
  }

  checkTend() {
    for (let i = 0; i < AppState.ownedLands.length; i++) {
      if (AppState.ownedLands[i].tended === AppState.ownedLands[i].acers) {
        AppState.ownedLands[i].quality++
      } else {
        AppState.ownedLands[i].quality -= 1
      }
      AppState.ownedLands[i].tended = 0
    }
  }
}
export const farmService = new FarmService()
