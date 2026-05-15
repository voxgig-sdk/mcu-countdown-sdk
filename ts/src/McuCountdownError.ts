
import { Context } from './Context'


class McuCountdownError extends Error {

  isMcuCountdownError = true

  sdk = 'McuCountdown'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  McuCountdownError
}

