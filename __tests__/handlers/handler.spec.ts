import * as lambda from '../../src/handlers'

describe('Test hello-world', () => {
  it('should return a hello world body', async () => {
    const result = await lambda.handler()

    const expectedResult = {
      statusCode: 200,
      body: 'Hello world',
    }

    expect(result).toEqual(expectedResult)
  })
})