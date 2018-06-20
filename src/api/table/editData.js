export function editData (url, editInfo) {
  // var editInfo = ''
  console.log('editData--' + editInfo)
  const promise = new Promise(function (resolve, reject) {
    const handle = function () {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        console.log('status200--' + this.responseText)
        var res = JSON.parse(this.responseText)
        resolve(res)
        // resolve(this.responseText)
      } else {
        reject(new Error(this.statusText))
      }
    }
    const client = new XMLHttpRequest()
    client.open('POST', url)
    client.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    client.send(editInfo)
    client.onreadystatechange = handle
  })

  return promise
}
