const initialStore = [
  {
    id: 0,
    name: "Kamoliddin Jamoliddinov",
    email: "k@g.com",
    number: 1234567,
  },
  {
    id: 1,
    name: "Umida Hanimqulova",
    email: "u@g.com",
    number: 7654321,
  },
];

const contactReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
