import Vapor
import HTTP

let drop = Droplet()

struct ServerNameMiddleware: Middleware {
    func respond(to request: Request, chainingTo next: Responder) throws -> Response {
        let response = try next.respond(to: request)
        response.headers[.server] = "Vapor 1"
        
        return response
    }
}

drop.middleware.append(ServerNameMiddleware())

drop.get("json") { req in
    return JSON([
        "message": "Hello, World!"
    ])
}

drop.get("plaintext") { req in
    return "Hello, World!" as StaticString
}

drop.run()
