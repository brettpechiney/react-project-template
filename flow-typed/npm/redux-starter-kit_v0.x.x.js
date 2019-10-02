// flow-typed signature: 4f12b255dae5afa810debf16ee6f74b6
// flow-typed version: c6154227d1/redux-starter-kit_v0.x.x/flow_>=v0.89.x <=v0.103.x

declare module 'redux-starter-kit' {
  declare export type PayloadAction<P: any, T: string = string> = {
    type: T,
    payload: P
  }
}
