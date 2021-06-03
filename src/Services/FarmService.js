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

  setActiveFruit(id) {
    switch (id) {
      case 0:
        AppState.fruits[0].selected = true
        AppState.fruits[1].selected = false
        AppState.fruits[2].selected = false

        break
      case 1:
        AppState.fruits[0].selected = false
        AppState.fruits[1].selected = true
        AppState.fruits[2].selected = false
        break
      case 2:
        AppState.fruits[0].selected = false
        AppState.fruits[1].selected = false
        AppState.fruits[2].selected = true
        break
      default:
        break
    }
  }

  plantFruit(id, selectedFruit) {
    AppState.plantedFruit[id].title = selectedFruit
    saveState()
  }

  tend(owned) {
    if (owned.tended < owned.acers) {
      const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
      let tended = AppState.ownedLands[index].tended
      tended++
      AppState.ownedLands[index].tended = tended
      const mod = tended % 10
      if (mod === 0 || mod === 5) {
        saveState()
      }
    }
  }
}
export const farmService = new FarmService()
