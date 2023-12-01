import { ApiName } from "../types"

export default class ApiType {
  readonly api : ApiName
  readonly name : string

  constructor(api : ApiName, name : string) {
    this.api = api
    this.name = name
  }
}