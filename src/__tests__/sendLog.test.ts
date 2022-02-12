import Logger from "../index"


test('Init Logger', () => {
  const logger = new Logger('token', 'n34ay', true)
  expect(logger).toBe('Hello Carl');
})
