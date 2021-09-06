import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'
import { optionToBuyService } from './OptionToBuyService'

class CharactersService {
  genName() {
    const index = Math.floor(Math.random() * AppState.names.length)
    AppState.character.name = AppState.names[index]
  }

  updateMonthlyCosts() {
    const ownedLands = AppState.ownedLands
    const kids = AppState.character.children
    const familyMemberCost = 150
    let total = 0
    for (let i = 0; i < ownedLands.length; i++) {
      total = total + ownedLands[i].acers * 20 + ownedLands[i].beds * 100
    }
    AppState.monthlyCosts = total + ((kids * familyMemberCost) + familyMemberCost)
    saveState()
  }

  addMonthlyCosts(property) {
    AppState.monthlyCosts += (((property.beds * AppState.currentYearCost.bedCost) + (property.acers * AppState.currentYearCost.acerCost)) / 2)
    saveState()
  }

  removeMonthlyCosts(property) {
    AppState.monthlyCosts -= (((property.beds * AppState.currentYearCost.bedCost) + (property.acers * AppState.currentYearCost.acerCost)) / 2)
    saveState()
  }

  addHiringCosts(owned) {
    const landCost = optionToBuyService.calculateMarketPrice(owned)
    AppState.monthlyCosts += landCost / 240
  }

  removeHiringCosts(owned) {
    const landCost = optionToBuyService.calculateMarketPrice(owned)
    AppState.monthlyCosts -= landCost / 240
  }
}

export const charactersService = new CharactersService()
