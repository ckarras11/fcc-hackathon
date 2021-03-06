const api = 'https://spare-change-jamstack.herokuapp.com/v1alpha1/graphql'
const headers = {
  'Content-Type': 'application/json',
}

export const getExpenses = userID => {
  const query = {
    query: `
    {
      expense (
        where: {user_id: {_eq: "${userID}" }}
      ) {
        id
        name
        description
        amount
        type
      }
    }`,
  }

  return fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify(query),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log(e))
}

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
    }`,
  }

  return fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify(query),
  })
    .then(res => res.json())
    .catch(e => console.log(e))
}

export const addExpense = expense => {
  const query = {
    query: `mutation
      {
        insert_expense(objects: [{
          name: "${expense.name}",
          description: "${expense.description}",
          amount: ${expense.amount},
          date: "${expense.date}",
          type: "${expense.type}"
          user_id: "${expense.userID}"
        }]) {
          returning {
            id
            name
            description
            user_id
          }
        }
      }
    `,
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
            type: "${expense.type}"
          }
        ) {
          affected_rows 
        }
      }
    `,
  }

  return fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify(query),
  })
    .then(res => res.json())
    .catch(e => console.log(e))
}

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
    `,
  }

  return fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify(query),
  })
    .then(res => res.json())
    .catch(e => console.log(e))
}
