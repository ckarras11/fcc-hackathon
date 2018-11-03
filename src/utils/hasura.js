const api = 'https://spare-change-jamstack.herokuapp.com/v1alpha1/graphql'
const headers = {
  'Content-Type': 'application/json',
}

export const getExpenses = (userID) => {
  const query = {
    'query': `
    {
      expense (
        where: {user_id: {_eq: ${userID} }}
      ) {
        id
        name
        description
      }
    }`
  }

  return fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify(query),
  })
    .then(res => res.json())
    .catch(e => console.log(e))
}

export const getAllExpenses = () => {
  const query = {
    'query': `
    {
      expense {
      id
      name
      description
      user_id
      }
    }`
  }

  return fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify(query),
  })
    .then(res => res.json())
    .catch(e => console.log(e))
}

export const addExpense = (expense) => {
  console.log(expense)
  const query = {
    'query': `mutation
      {
        insert_expense(objects: [{name: "${expense.name}", description: "${expense.description}", amount: ${expense.amount}, date: "2018-11-01", user_id: ${expense.userID}}]) {
          returning {
            id
            name
            description
            user_id
          }
        }
      }
    `
  }
  console.log(query)

  return fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify(query),
  })
    .then(res => res.json())
    .catch(e => console.log(e))
}