// let baseUrl = 'http://47.103.198.87:3000'       //生产环境
let baseUrl = 'http://localhost:3000'//http://localhost:4000
export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()
  url = baseUrl + url

  if (type == 'GET') {
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch && method == 'fetch') {
    

    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json', //Accept 请求头用来告知（服务器）客户端可以处理的内容类型，
        'Content-Type': 'application/json',//在响应中，Content-Type标头告诉客户端实际返回的内容的内容类型。
      },
      mode: "cors",
      // cache: 'force-cache'cache //作为Request 接口只读属性包含着请求的缓存模式。它控制着请求以何种方式与浏览器的  HTTP 缓存进行交互
    }

    if (type == 'POST') {
      
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    let token = window.localStorage.getItem('token')
    if (token) {
      requestConfig.headers.Authorization = 'Bearer ' + token
    }

    try {
      const response = await fetch(url, requestConfig)
      const reponseJson = await response.json()
      return reponseJson
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        // eslint-disable-next-line no-undef
        requestObj = new ActiveXObject();
      }

      let sendData = '';
      if (type == 'POST') {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj);
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}