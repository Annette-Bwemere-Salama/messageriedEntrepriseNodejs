"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const User_1 = __importDefault(require("./User"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send('Salut tous les mondes')
    const hashedPassword = yield bcryptjs_1.default.hash(req.body.passport, 10);
    const newUser = new User_1.default({
        username: req.body.username,
        password: hashedPassword
    });
}));
app.listen(port, () => {
    console.log(`[server]: Server is runnning at https : localhost: ${port}`);
});
