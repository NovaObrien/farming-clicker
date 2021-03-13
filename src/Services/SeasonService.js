import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class SeasonService {
  increaseAge() {
    AppState.character.age++
    saveState()
  }

  changeSeason() {
    let season = AppState.season
    if (season === 'spring') {
      season = 'summer'
    } else if (season === 'summer') {
      season = 'fall'
    } else if (season === 'fall') {
      season = 'winter'
    } else {
      season = 'spring'
    }
    AppState.season = season
    saveState()
    // spring {march/ April/ May}
    // summer {june/ july/ august}
    // fall {september/ october / November}
    // winter {December/ January/ Febuary}
  }
}
export const seasonService = new SeasonService()
