export function fibonacci(n: number): number[] {
  const niza = []
  if (n == 0) {
    return []
  }
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      niza.push(i)
    } else {
      const a: number = niza[i - 2]
      const b: number = niza[i - 1]
      const c: number = a + b
      niza.push(c)
    }
  }
  return niza
}

console.log(fibonacci(8))
