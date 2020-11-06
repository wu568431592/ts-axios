const toString = Object.prototype.toString
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val:any): val is Object{
//   return val !==null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U{
  for(const key in from){
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs:any[]):any {
  const res = Object.create(null)
  objs.forEach(obj =>{
    if(obj){
      Object.keys(obj).forEach(key=>{
        const val = obj[key]
        if(isPlainObject(val)){
          if(isPlainObject(res[key])){
            res[key] = deepMerge(res[key], val)
          }else{
            res[key] = deepMerge(val)
          }
        }else{ 
          res[key] = val
        }
      })
    }
  })
  return res
}

export function isFormData(val: any): val is FormData{
  return typeof val !== 'undefined' && val instanceof FormData
}

export function isURLSearchParams(val: any): val is URLSearchParams{
  return typeof val !== 'undefined' && val instanceof URLSearchParams
}

