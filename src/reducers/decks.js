export default function decks(state = { decks: [] }, action) {
  switch (action.type) {
    case "FETCH_DECKS":
      return { decks: action.payload };
    case "ADD_DECK":
      return [...state.decks, action.payload]
    case "DELETE_DECK":
      return { decks: action.payload };
    default:
      return state;
  }
}
