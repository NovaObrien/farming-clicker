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

  // brokenTractor() {
  //   const owned = AppState.ownedLands
  //   const hasTractors = []
  //   for (let i = 0; i < owned.length; i++) {
  //     if (owned[i].hasTractors === true) {
  //       hasTractors.unshift(owned[i])
  //     }
  //   }
  //   if (hasTractors.length !== 0) {
  //     const index = Math.floor(Math.random * hasTractors.length)
  //     const res = hasTractors[index]

  //     const ownedIndex = owned.findIndex(o => o.id === res.id)
  //     AppState.ownedLands[ownedIndex].tractorActive = false
  //     saveState()
  //   } else if (AppState.tractors > 0) {
  //     AppState.tractors--
  //     saveState()
  //   }
  // }
}
export const farmService = new FarmService()
