
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { McuCountdownSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await McuCountdownSDK.test()
    equal(null !== testsdk, true)
  })

})
