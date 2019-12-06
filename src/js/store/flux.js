const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			addToFavorites: element => {
				let store = getStore();
				const temp = store.favorites.concat([element]);
				setStore({
					favorites: temp
				});
			}
		}
	};
};

export default getState;

// Use getActions to call a function within a fuction

/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

//get the store

//we have to loop the entire demo array to look for the respective index
//and change its color

//reset the global store
