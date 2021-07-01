import { AppState } from '../AppState'

class CharactersService {
  genName() {
    const index = Math.floor(Math.random() * AppState.names.length)
    AppState.character.name = AppState.names[index]
  }
}

export const charactersService = new CharactersService()
