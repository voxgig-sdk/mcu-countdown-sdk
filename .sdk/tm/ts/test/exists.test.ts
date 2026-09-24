
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { McuCountdownSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = McuCountdownSDK.test()
    equal(testsdk instanceof McuCountdownSDK, true,
      'McuCountdownSDK.test() must return a client synchronously')
  })

})
