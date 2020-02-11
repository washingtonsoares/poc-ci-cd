export function parseParameters(parameters) {
  try {
    const parsedParams = JSON.parse(parameters)

    return parsedParams
  } catch {
    return parameters
  }
}
