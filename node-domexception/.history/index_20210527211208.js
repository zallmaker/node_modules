/*! blob-to-buffer. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

if (!globalThis.DOMException) {
  var { MessageChannel } = require('worker_threads'),
  port = new MessageChannel().port1,
  ab = new ArrayBuffer()
  try { port.postMessage(ab, [ab, ab]) }
  catch (err) {
    err.constructor.name === 'DOMException' && (
      globalThis.DOMException = err.constructor
    )
  }
}

module.exports = globalThis.DOMException