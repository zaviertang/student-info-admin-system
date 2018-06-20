export function deleteData (url, id) {
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
    // client.open('GET', url)
    client.open('POST', url)
    client.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    client.send(id)
    client.onreadystatechange = handle
  })

  return promise
}
