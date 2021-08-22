const SessionController = require("./SessionController")
// @ponicode
describe("SessionController.create", () => {
    test("0", async () => {
        await SessionController.create({ body: true }, 404)
    })

    test("1", async () => {
        await SessionController.create({ body: true }, 400)
    })

    test("2", async () => {
        await SessionController.create({ body: true }, 429)
    })

    test("3", async () => {
        await SessionController.create({ body: true }, 500)
    })

    test("4", async () => {
        await SessionController.create({ body: false }, 200)
    })

    test("5", async () => {
        await SessionController.create(undefined, undefined)
    })
})
