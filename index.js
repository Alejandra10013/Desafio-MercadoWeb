const express = require("express")
const { create } = require("express-handlebars")
const app = express()

app.use(express.static(__dirname + "/public"))
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"))
app.use("/js", express.static(__dirname + "/public/js"))

const hbs = create({
    defaultLayout: "main",
    partialsDir: __dirname + "/views/partials"
})

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
app.set("views", "./views")

app.get("/", (req, res) => {
    res.render("index",
        {
            products: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"]
        }
    )
})

app.listen(3000, () => console.log("Server running on: http://localhost:3000"))