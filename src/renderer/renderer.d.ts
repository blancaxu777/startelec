export interface IElectronAPI {
  getPreloadNum: () => Promise<number>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}