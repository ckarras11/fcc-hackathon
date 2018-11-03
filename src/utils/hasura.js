const api = 'https://spare-change-jamstack.herokuapp.com/v1alpha1/graphql'
const headers = {
  'Content-Type': 'application/json',
}

export const getExpenses = userID => {
  const graphiql = JSON.stringify(`
        expense (
          where: {user_id: {_eq: ${userID} }}
        ) {
          id
          name
          description
          user_id
        }`)

  const query = {
    query: graphiql,
  }

  return fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify(query),
  })
    .then(data => console.log(data))
    .catch(e => console.log(e))
}

export const getAllExpenses = () => {
  const graphiql = `
        expense {
            id
            name
            description
            user_id
        }
        `

  console.log(graphiql)

  const query = {
    query: JSON.stringify(graphiql),
  }

  return fetch(api, {
    method: 'POST',
    headers,
    body: query,
  })
    .then(data => console.log(data))
    .catch(e => console.log(e))
}
