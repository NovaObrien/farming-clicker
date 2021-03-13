import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class SeasonService {
  increaseAge() {
    AppState.character.age++
    saveState()
  }

  changeSeason() {
    // spring {march/ April/ May}
    // summer {june/ july/ august}
    // fall {september/ october / November}
    // winter {December/ January/ Febuary}
  }
}
export const seasonService = new SeasonService()
