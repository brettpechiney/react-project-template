// flow-typed signature: f609996d0cc9eb6b8a9f53de62d91f6f
// flow-typed version: c6154227d1/redux-starter-kit_v0.x.x/flow_>=v0.104.x

declare module 'redux-starter-kit' {
  declare export type PayloadAction<P: any, T: string = string> = {
    type: T,
    payload: P,
    ...
  }
}
