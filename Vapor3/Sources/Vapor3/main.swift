import Vapor

let app = try Application()

let router = try app.make(Router.self)

router.get("ping") { req in
    return "pong"
}
    
router.get("ping2") { req in
    return "pong" as StaticString
}

try app.run()
