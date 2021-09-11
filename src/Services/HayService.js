import Swal from 'sweetalert2'
import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class HayService {
  harvestHay(owned) {
    if (owned.active.workers === false && owned.active.home === false) { return }
    const season = AppState.time.season
    if (season === 'Winter') { return }
    if (season === 'Spring' && owned.harvested.spring === true) { return }
    if (season === 'Summer' && owned.harvested.summer === true) { return }
    if (season === 'Fall' && owned.harvested.fall === true) { return }

    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)

    if (season === 'Spring' && owned.harvested.spring !== true) {
      const total = (owned.acers * 2) * ((AppState.currentYearCost.acerCost * owned.quality) / 100)
      Swal.fire({
        title: 'Harvest',
        text: 'Your ' + season + ' harvest of Hay sold for ' + (total).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
      })
      AppState.character.currency += total

      if (season === 'Spring') { owned.harvested.spring = true }
      if (season === 'Summer') { owned.harvested.summer = true }
      if (season === 'Fall') { owned.harvested.fall = true }
    }
    AppState.ownedLands[index] = owned
    saveState()
  }

  resetHayHarvest() {
    const ownedLands = AppState.ownedLands
    for (let i = 0; i < ownedLands.length; i++) {
      if (ownedLands[i].type === 'Hay') {
        ownedLands[i].harvested.spring = false
        ownedLands[i].harvested.summer = false
        ownedLands[i].harvested.fall = false
      }
    }
    AppState.ownedLands = ownedLands
  }
} export const hayService = new HayService()
