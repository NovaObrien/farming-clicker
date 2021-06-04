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

  checkFruitTreeLayout() {
    // need to check 0 and 3 position?? what if we add more???
    // const plantedFruit = AppState.plantedFruit
    // const bushelBonus = 0
    // const varityBonus = 0
    // if (plantedFruit[0].title === plantedFruit[1].title) {

    // }
    // 0 1 2  3
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
