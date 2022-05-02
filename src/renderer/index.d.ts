declare module '*.css' {
  interface Icss {
    [key: string]: string
  }
  const css:Icss
  export default css
}
