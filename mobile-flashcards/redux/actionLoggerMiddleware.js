const actions_to_include_payloads_for = [
  '@@router/LOCATION_CHANGE'
]

function sanitizePayload(payload) {
  return typeof payload === 'object' ? payload : payload.toString()
}

export default function logger() {
  return next => action => {
    const type_pieces = action.type.split('/')
    const shortened_type = `${type_pieces[0].slice(0, 3)}/${type_pieces[1].slice(0, 26)}`
    const maybe_payload = actions_to_include_payloads_for.includes(action.type) ? sanitizePayload(action.payload) : {}
    return next(action)
  }
}
