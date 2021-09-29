const initialStore = window.localStorage.getItem("base")
  ? JSON.parse(window.localStorage.getItem("base"))
  : [];

const contactReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      window.localStorage.setItem("base", JSON.stringify(state));
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      window.localStorage.setItem("base", JSON.stringify(state));
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      window.localStorage.setItem("base", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default contactReducer;
