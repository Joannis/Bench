import Vapor
import Foundation
import Random
import MongoKitten

let drop = try Droplet()

struct ServerNameMiddleware: Middleware {
    let serverName: String
    
    func respond(to request: Request, chainingTo next: Responder) throws -> Response {
        let response = try next.respond(to: request)
        response.headers[.server] = serverName
        
        return response
    }
}

let db = try Database("mongodb://localhost:27017/vapor2")
let router = drop.grouped(ServerNameMiddleware(serverName: "Vapor 2"))

router.get("json") { request in
    return [
        "message": "Hello, World!"
    ] as JSON
}

router.get("db") { request in
    // 1...10_000
    let id = (try OSRandom().makeInt() % 10_000) &+ 1
    
    guard let doc = try db["World"].findOne("_id" == id) else {
        throw Abort(.notFound)
    }
    
    let data = try JSONEncoder().encode(doc)
    
    return try JSON(bytes: data)
}

router.get("fortunes") { request in
    // 1...10_000
    let id = (try OSRandom().makeInt() % 10_000) &+ 1
    
    guard let doc = try db["Fortune"].findOne("_id" == id) else {
        throw Abort(.notFound)
    }
    
    let data = try JSONEncoder().encode(doc)
    
    return try JSON(bytes: data)
}

router.get("plaintext") { request in
    return "Hello, World!"
}

try drop.run()
