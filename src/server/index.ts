import { createServer, Model } from 'miragejs';
import type { IUser } from '../types/index.types'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      users: Model.extend<IUser>({
        name: '',
        cpf: '',
        email: '',
        phone: 0,
        age: 0,
        size: 0,
        height: 0,
        pressure: 0,
        diet: ''
      }),
    },

    routes() {
      this.namespace = "api";

      this.post("/users", (schema: any, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.users.create(attrs)
      });

      this.post("/register", (schema: any, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.users.create(attrs)
      });

      this.get("/users", (schema: any) => {
        return schema.users.all();
      });
    },
  })

  return server
}