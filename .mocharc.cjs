module.exports = {
    require: [
        "@babel/register",
        "global-jsdom/register",       
        "ignore-styles"
    ],
    extension: [".js", ".cjs", ".jsx"],
    spec: ["./test/App_Components.test.jsx"],
    ui: "bdd"
};

