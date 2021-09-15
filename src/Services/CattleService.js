import Swal from 'sweetalert2'
import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class CattleService {
  // TODO Not sure how I want to do this but cattle should work by not harvesting will reduce the quality of the cattle over the winter months, as well as increase the quantity which also reduces the quality. The higher the population the higher the chance of outbreak of disease... Anyways thoughts to consider as you build this out

  harvestCattle(owned) {
    if (owned.active.workers === false && owned.active.home === false) { return }
    if (owned.harvested === true) { return }

    const month = AppState.time.month

    if (month === 'September' || month === 'October' || month === 'November' || month === 'December') {
      const total = owned.cows * owned.quality
      Swal.fire({
        title: 'Harvest',
        text: 'Your Cattle Sold for ' + (total).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
      })
      AppState.character.currency += total
      const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
      owned.harvested = true
      AppState.ownedLands[index] = owned
    }
    saveState()
  }

  resetCattleHarvest() {
    const ownedLands = AppState.ownedLands
    for (let i = 0; i < ownedLands.length; i++) {
      if (ownedLands[i].type === 'Cattle') {
        ownedLands[i].harvested.spring = false
        ownedLands[i].harvested.summer = false
        ownedLands[i].harvested.fall = false
      }
    }
    AppState.ownedLands = ownedLands
  }
}
export const cattleService = new CattleService()
