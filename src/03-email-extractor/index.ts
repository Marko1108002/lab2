export function extractEmails(
  users: { id: number; name: string; email: string; age: number }[],
): string[] {
  const emails: string[] = []
  if (users.length == 0) {
    return []
  }
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    if (user === null) {
      continue
    }
    if (user === undefined) {
      continue
    }
    if (emails.includes(user['email'])) {
      console.log(`Duplicate email found ${user['email']}`)
      continue
    }
    emails.push(user['email'])
  }
  return emails
}

console.log(
  extractEmails([
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 28 },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 },
    { id: 4, name: 'David', email: 'alice@example.com', age: 40 },
  ]),
)
