export default function add(a, b) {
  a = String(a)
  b = String(b)
  let i = a.length - 1
  let j = b.length - 1

  let carry = 0
  let res = ''
  while(i >=0 || j >=0) {
    let val1 = 0
    let val2 = 0
    if(i >= 0) {
      val1 = a[i] - 0
      i--
    }
    if(j >= 0) {
      val2 = b[j] - 0
      j--
    }
    let sum = val1 + val2 + carry
    if(sum > 9) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }
    res = sum + res
  }
  if(carry) {
    res = carry + res
  }
  return res
}
// add(999, 1) 1000
// add('1', '999') 1000