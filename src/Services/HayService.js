import Swal from 'sweetalert2'
import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class HayService {
  harvestHay(owned) {
    const season = AppState.time.season
    if (season === 'Spring' && owned.harvested.spring !== true) {
      const total = owned.acers * owned.quality
      Swal.fire({
        title: 'Harvest',
        text: 'Your Hay Sold for ' + (total).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
      })
      AppState.character.currency += total

      owned.harvested.spring = true
      saveState()
    } else if (season === 'Summer' && owned.harvested.summer !== true) {
      const total = owned.acers * owned.quality
      Swal.fire({
        title: 'Harvest',
        text: 'Your Hay Sold for ' + (total).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
      })
      AppState.character.currency += total

      owned.harvested.summer = true
      saveState()
    } else if (season === 'Fall' && owned.harvested.fall !== true) {
      const total = owned.acers * owned.quality
      Swal.fire({
        title: 'Harvest',
        text: 'Your Hay Sold for ' + (total).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
      })
      AppState.character.currency += total

      owned.harvested.fall = true
      saveState()
    }
  }

  resetHayHarvest() {
    const ownedLand = AppState.ownedLands
    for (let i = 0; i < ownedLand.length; i++) {
      if (ownedLand.type === 'Hay') {
        ownedLand[i].harvested.spring = false
        ownedLand[i].harvested.summer = false
        ownedLand[i].harvested.fall = false
      }
    }
    AppState.ownedLands = ownedLand
  }
} export const hayService = new HayService()
