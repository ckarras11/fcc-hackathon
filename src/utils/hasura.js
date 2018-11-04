const api = 'https://spare-change-jamstack.herokuapp.com/v1alpha1/graphql';
const headers = {
	'Content-Type': 'application/json'
};

// const callDB = (query) => {
//   return fetch(api, {
//   headers,
//   body: JSON.stringify(query)
// })
//   .then(res => res.json())
//   .catch(e => console.log(e))
// }

export const getExpenses = userID => {
	const query = {
		query: `
    {
      expense (
        where: {user_id: {_eq: ${userID} }}
      ) {
        id
        name
        description
      }
    }`
	};

	// return callDB(query);

	return fetch(api, {
		method: 'POST',
		headers,
		body: JSON.stringify(query)
	})
		.then(res => res.json())
		.catch(e => console.log(e));
};

export const getAllExpenses = () => {
	const query = {
		query: `
    {
      expense {
      id
      name
      description
      user_id
      }
    }`
	};

	// return callDB(query);

	return fetch(api, {
		method: 'POST',
		headers,
		body: JSON.stringify(query)
	})
		.then(res => res.json())
		.catch(e => console.log(e));
};

export const addExpense = expense => {
	const query = {
		query: `mutation
      {
        insert_expense(objects: [{
          name: "${expense.name}",
          description: "${expense.description}",
          amount: ${expense.amount},
          date: "${expense.date}",
          user_id: ${expense.userID}
        }]) {
          returning {
            id
            name
            description
            user_id
          }
        }
      }
    `
	};

	// return callDB(query);

	return fetch(api, {
		method: 'POST',
		headers,
		body: JSON.stringify(query)
	})
		.then(res => res.json())
		.catch(e => console.log(e));
};

export const updateExpense = expense => {
	const query = {
		query: `mutation
      {
        update_expense(
          where: {id: {_eq: ${expense.id}}},
          _set: {
            name: "${expense.name}"
            description: "${expense.description}"
            amount: ${expense.amount}
            date: "${expense.date}"
          }
        ) {
          affected_rows 
        }
      }
    `
	};

	// return callDB(query);

	return fetch(api, {
		method: 'POST',
		headers,
		body: JSON.stringify(query)
	})
		.then(res => res.json())
		.catch(e => console.log(e));
};

export const deleteExpense = expense => {
	const query = {
		query: `
      mutation {
        delete_expense(
          where: {id: {_eq: ${expense.id}}}
        ) {
          affected_rows
          returning {
            id
          }
        }
      }
    `
	};

	// return callDB(query);

	return fetch(api, {
		method: 'POST',
		headers,
		body: JSON.stringify(query)
	})
		.then(res => res.json())
		.catch(e => console.log(e));
};
