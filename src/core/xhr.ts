import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'
import cookie from '../helpers/cookie'
import { isURLSameOrigin } from '../helpers/url'
import { isFormData } from '../helpers/utils'
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout, cancelToken, withCredentials,
      xsrfCookieName,
      xsrfHeaderName,
      onDownloadProgress,
      onUploadProgress,
      auth,
      validateStatus
    } = config
    const request = new XMLHttpRequest()

    request.open(method.toUpperCase() ,url as string , true)

    configureRequest()

    addEvents()

    processHeaders()

    processCancel()

    request.send(data)

    function configureRequest(): void{
      request.onreadystatechange = function handleLoad() {
        if (request.readyState !== 4) {
          return
        }
        // 网络错误，超市错误 status ===0
        if (request.status === 0) {
          return
        }
  
        const responseHeaders = parseHeaders(request.getAllResponseHeaders())
        const responseData = responseType !== 'text' ? request.response : request.responseText
        const response: AxiosResponse = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        }
        handleResponse(response)
      }
  
      if (responseType) {
        request.responseType = responseType
      }
      if (timeout) {
        request.timeout = timeout
      }
      if(withCredentials){
        request.withCredentials = withCredentials
      }
    }
    function addEvents(): void{
      request.onerror = function handleError() {
        // reject(new Error('Network error'))
        reject(createError('Network error', config, null, request))
      }
  
      request.ontimeout = function handleTimeout() {
        // reject(new Error(`Timeout of ${timeout} ms exceeded`))
        reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request))
      }
  
      if(onDownloadProgress){
        request.onprogress = onDownloadProgress
      }
  
      if(onUploadProgress){
        request.upload.onprogress = onUploadProgress
      }
    }

    function processHeaders():void {
      if(isFormData(data)){
        delete headers['Content-Type']
      }
  
      if((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName){
        const xsrfValue = cookie.read(xsrfCookieName)
        if(xsrfValue && xsrfHeaderName){
          headers[xsrfHeaderName] = xsrfValue
        }
      }

      if(auth){
        headers['Authorization'] = 'Basic ' + btoa(auth.username + ':' + auth.password)
      }
  
      Object.keys(headers).forEach(name => {
        if (data === null && name.toLowerCase() === 'content-type') {
          delete headers[name]
        } else {
          request.setRequestHeader(name, headers[name])
        }
      })
    }

    function processCancel():void {
      if(cancelToken){
        cancelToken.promise.then(reason =>{
          request.abort()
          reject(reason)
        })
      }
    }

    function handleResponse(response: AxiosResponse): void {
      if (!validateStatus || validateStatus(response.status)) {
        resolve(response)
      } else {
        // reject(new Error('Request failed width status code '+ response.status))
        reject(
          createError(
            'Request failed width status code ' + response.status,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}

