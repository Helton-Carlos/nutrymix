import { createServer } from "miragejs"
import user from "./user.ts"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api"

      this.get("/users", () => user)
    },
  })

  return server
}