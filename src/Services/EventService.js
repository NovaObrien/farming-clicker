import { AppState } from '../AppState'
import $ from 'jquery'

class EventService {
  inherEvent() {
    AppState.event.title = 'An Inheritance'
    AppState.event.greeting = 'Dear ' + AppState.character.name + ','
    AppState.event.text = ' I\'m George Brawn, a Lawyer from NewYork. I am contacting you in regards to a desceased client of mine who died in Australia on the 9th of January. Before his death my client left you a sum of 9,000.00 USD in his will, along with the following message..."Hey there kid, if you\'re reading this before I get to see you again, I just wanted to tell you to follow those dreams you were telling me about.. Start that farm and raise that family you always wanted.. Don\'t let the days pass you by.'
    AppState.event.closing = 'Love, Grandpa"'
    AppState.event.closeDesc = 'He\'s in a better place now'
    $('#eventModal').modal('show')
  }

  bankruptcyEvent() {
    // occurs when the player runs out of assets
  }
}
export const eventService = new EventService()
