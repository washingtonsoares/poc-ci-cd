import { parseParameters } from './helpers'

test('Should parse parameters', () => {
  const parameters = '{ "foo": "bar" }'
  const parsedParams = parseParameters(parameters)
  expect(parsedParams).toMatchObject({ foo: 'bar' })
})

test('Should try to parse an invalid parameters', () => {
  const invalidJSON = 'foo{bar'
  const parsedParams = parseParameters(invalidJSON)
  expect(parsedParams).toBe(invalidJSON)
})
