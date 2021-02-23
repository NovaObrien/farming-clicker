import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class CharactersService {
  genName() {
    const index = Math.floor(Math.random() * AppState.names.length)
    AppState.character.name = AppState.names[index]

    saveState()
  }
}

export const charactersService = new CharactersService()
