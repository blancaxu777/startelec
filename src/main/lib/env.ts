export const isDev = function (){
  return process.env.NODE_ENV === 'development'
}
export const isProd = function (){
  return process.env.NODE_ENV === 'production'
}
