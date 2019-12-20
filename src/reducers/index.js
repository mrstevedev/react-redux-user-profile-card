export default(state, action) => {
		switch(action.type) {
			case "SET_ABOUT":
				return {
					...state,
					aboutOne: action.text
				}
				default:
					return state;
		}
}