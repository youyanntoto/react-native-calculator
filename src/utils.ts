export function formatNumber(
  num: number,
  decimalSeparator: string,
  thousandSeparator: string
): string {
  // const nums = num.toString().split('.')
  // const n = nums[0]
  //
  // const res = n.replace(/(\d)(?=(\d\d)+\d$)/g, v => {
  //   return v + thousandSeparator
  // })
  //
  // return res + (nums.length > 1 ? decimalSeparator + nums[1] : '')
  return String(num)
}
