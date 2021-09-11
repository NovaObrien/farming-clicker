import Swal from 'sweetalert2'
import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class CattleService {
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
