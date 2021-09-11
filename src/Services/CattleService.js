import Swal from 'sweetalert2'
import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class CattleService {
  // TODO Not sure how I want to do this but cattle should work by not harvesting will reduce the quality of the cattle over the winter months, as well as increase the quantity which also reduces the quality. The higher the population the higher the chance of outbreak of disease... Anyways thoughts to consider as you build this out
  checkTend() {

  }

  harvestCattle(owned) {
    if (owned.active.workers === false && owned.active.home === false) { return }
    if (owned.harvested === true) { return }

    const season = AppState.time.season

    if (season === 'September' || season === 'October' || season === 'November' || season === 'December') {
      const total = owned.cattle * owned.quality
      Swal.fire({
        title: 'Harvest',
        text: 'Your Cattle Sold for ' + (total).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
      })
      AppState.character.currency += total
    }
    saveState()
  }

  resetCattleHarvest() {

  }
}
export const cattleService = new CattleService()
