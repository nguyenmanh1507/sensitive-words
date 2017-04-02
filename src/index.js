// @flow

export const sensitiveWords = (content: string, words: Array<string>): string => (
  content.replace(
    new RegExp(words.join('|'), 'ig'),
    'xxxx'
  )
)
