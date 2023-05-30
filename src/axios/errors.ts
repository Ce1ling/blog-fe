import { message } from "antd"

type Errors = {
  [k: string]: string
}

/**
 * 请求错误提示, 只需要在这里添加错误类型即可
 */
export const ERRORS: Errors = {
  timeout: '请求超时',
  network: '请求错误',
}

/**
 * 统一处理错误, 支持的错误类型请查看 `ERRORS`
 * @param {String} msg 错误信息字符串, 无需区分大小写
 */
export const handleError = (msg: string) => {
  const errs = Object.keys(ERRORS).map(key => {
    const hasErr = msg.toLowerCase().match(new RegExp(`${key}`))
    if (hasErr) {
      const errMsg = ERRORS[hasErr[0]]
      message.error(errMsg)
      return errMsg
    }
  })
  return errs.filter(Boolean)
}