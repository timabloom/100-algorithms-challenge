export function isTandemRepeat(inputString: string): boolean {
if (inputString.length % 2) return false

const startString = inputString.slice(inputString.length / 2)
const endString = inputString.slice(0, inputString.length / 2)

return startString === endString
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
