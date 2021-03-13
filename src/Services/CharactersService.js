import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'
import { eventService } from './EventService'

class CharactersService {
  genName() {
    const index = Math.floor(Math.random() * AppState.names.length)
    AppState.character.name = AppState.names[index]
    saveState()
    // this assumes new game and calls inheritence event
    eventService.inherEvent()
  }
}

export const charactersService = new CharactersService()
