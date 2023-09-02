import { createServer } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api"

      this.get("/users", () => [
        { id: "1", name: "Luke" },
        { id: "2", name: "Leia" },
        { id: "3", name: "Anakin" },
      ])
    },
  })

  return server
}