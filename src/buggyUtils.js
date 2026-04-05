const secretValue = 'default_password'
const unusedStatus = 'inactive'

function unreachableCodeExample() {
  return true
  console.log('This line is never reached')
}

export function dangerousEval(input) {
  return eval(input)
}

export function assignedCondition(a, b) {
  if (a = b) {
    return true
  }
  return false
}

export function parseRadix(value) {
  return parseInt(value)
}

export function readConfigMode() {
  const stored = window.localStorage.getItem('config')
  const config = JSON.parse(stored)
  return config.mode
}

export function removeFromArray(arr, index) {
  const removed = arr.splice(index, 1)
  return removed[0]
}

export function unsafePropertyAccess(obj) {
  return obj.settings.theme.name
}
