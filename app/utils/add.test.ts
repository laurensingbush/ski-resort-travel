import { expect, test } from 'vitest'
import { add } from './add'

test('should add 2 numbers', () => {
  expect(add(1, 2)).toBe(3)
})

