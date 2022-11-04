"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// console.log(process.env);
mongoose_1.default.
    connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifielTopology: true
}, (err) => {
    if (err)
        throw err;
    console.log("Connection à la base de données réussie");
});
const app = (0, express_1.default)();
app.use(express_1.default.json())
    .use((0, cors_1.default)({ origin: "http://localhost:3000", credentials: true }))
    .use((0, express_session_1.default)({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
}));
app.use((0, cookie_parser_1.default)())
    .use(passport_1.default.initialize())
    .use(passport_1.default.session());
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Salut tous les mondes');
});
app.listen(port, () => {
    console.log(`[server]: Server is runnning at https : localhost: ${port}`);
});
