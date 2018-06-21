export function queryDetail (url) {
  const promise = new Promise(function (resolve, reject) {
    const handle = function () {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        var res = JSON.parse(this.responseText)
        resolve(res)
        // resolve(this.responseText)
      } else {
        reject(new Error(this.statusText))
      }
    }
    const client = new XMLHttpRequest()
    client.open('GET', url)
    client.onreadystatechange = handle
    client.send()
  })

  return promise
}
