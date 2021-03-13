import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'
import { logger } from '../utils/Logger'

class TimeService {
  endTurn() {
    // 12 turns for now
    // 1, 2, 3, | 4, 5, 6, | 7, 8, 9, |10, 11, 12 |
    AppState.time.turn++
    const turn = AppState.time.turn
    if (turn < 4) {
      logger.log(turn)
      this.firstQuarter(turn)
    } else if (turn < 7 && turn > 3) {
      logger.log(turn)
      this.secondQuarter(turn)
    } else if (turn < 10 && turn > 6) {
      logger.log(turn)
      this.thirdQuarter(turn)
    } else {
      logger.log(turn)
      this.fourthQuarter(turn)
    }
  }

  firstQuarter(turn) {
    if (turn === 1) {
      AppState.time.month = 'January'
      AppState.time.year++
    } else if (turn === 2) {
      AppState.time.month = 'February'
    } else {
      AppState.time.month = 'March'
      AppState.time.season = 'Spring'
      AppState.character.age++
    }

    saveState()
  }

  secondQuarter(turn) {
    if (turn === 4) {
      AppState.time.month = 'April'
    } else if (turn === 5) {
      AppState.time.month = 'May'
    } else {
      AppState.time.month = 'June'
      AppState.time.season = 'Summer'
    }

    saveState()
  }

  thirdQuarter(turn) {
    if (turn === 7) {
      AppState.time.month = 'July'
    } else if (turn === 8) {
      AppState.time.month = 'August'
    } else {
      AppState.time.month = 'September'
      AppState.time.season = 'Fall'
    }

    saveState()
  }

  fourthQuarter(turn) {
    if (turn === 10) {
      AppState.time.month = 'October'
    } else if (turn === 11) {
      AppState.time.month = 'November'
    } else {
      AppState.time.month = 'December'
      AppState.time.season = 'Winter'
      AppState.time.turn = 0
    }
    saveState()
  }
}
export const timeService = new TimeService()
