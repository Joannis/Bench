// swift-tools-version:3.1
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Vapor1",
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        .Package(url: "https://github.com/vapor/vapor.git", majorVersion: 1, minor: 5),
    ]
)
