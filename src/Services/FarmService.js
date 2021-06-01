import { AppState } from '../AppState'

class FarmService {
  setTractor(owned) {
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    const bool = AppState.ownedLands[index].tractorActive

    if (AppState.tractors > 0 && bool === false) {
      AppState.ownedLands[index].tractorActive = true
      AppState.tractors--
    } else if (bool === true) {
      AppState.ownedLands[index].tractorActive = false
      AppState.tractors++
    }
  }
}
export const farmService = new FarmService()
