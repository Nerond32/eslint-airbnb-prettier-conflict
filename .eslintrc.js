module.exports = {
    plugins: ["prettier", "react"],
    extends: [
       "airbnb",
       "prettier",
       "prettier/react"
    ],
    rules: {
       "prettier/prettier": "error"
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx"],
                paths: "src"
            }
        }
    },
    env: {
        browser: true,
        es6: true,
    },
};
