export function request({ url, method = 'post', data, headers, requestList }) {
  return new Promise(resovle => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })
    xhr.send(data)
    xhr.onload = e => {
      resovle({
        data: e.target.response
      })
    }
  })
}
