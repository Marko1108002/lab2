export function sumOfMultiples(multiple: number, max: number): number {
  let suma = 0
  for (let i = multiple; i <= max; i += multiple) {
    suma += i
  }
  return suma
}

console.log(sumOfMultiples(5, 20))
