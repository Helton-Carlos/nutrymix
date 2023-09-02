import { createServer } from "miragejs"
import user from "./user.ts"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api"

      this.get("/users", () => user)

      let id = 0
      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        attrs.id = id++
        console.log(schema);
        
        return { user: attrs }
      })
    },
  })

  return server
}