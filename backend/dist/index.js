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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var express_1 = __importDefault(require("express"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var express_session_1 = __importDefault(require("express-session"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var passport_local_1 = __importDefault(require("passport-local"));
var cors_1 = __importDefault(require("cors"));
var passport_1 = __importDefault(require("passport"));
var User_1 = __importDefault(require("./User"));
var dotenv_1 = __importDefault(require("dotenv"));
var LocalStrategy = passport_local_1.default.Strategy;
dotenv_1.default.config();
var URI = process.env.MONGODB_URI;
console.log(URI);
mongoose_1.default.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, function (err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log("Connection fait avec succes chez mongodbdatabase ");
});
// midlewere
var app = (0, express_1.default)();
app.use(express_1.default.json())
    .use((0, cors_1.default)({ origin: "http://localhost:5173", credentials: true }))
    .use((0, express_session_1.default)({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
}));
app.use((0, cookie_parser_1.default)())
    .use(passport_1.default.initialize())
    .use(passport_1.default.session());
//passport
passport_1.default.use(new LocalStrategy(function (username, password, done) {
    User_1.default.findOne({ username: username }, function (err, user) {
        if (err)
            throw err;
        if (!user)
            return done(null, false);
        bcryptjs_1.default.compare(password, user.paassword, function (err, result) {
            if (err)
                throw err;
            if (result === true) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    });
}));
passport_1.default.serializeUser(function (user, cb) {
    cb(null, user.id);
});
passport_1.default.deserializeUser(function (id, cb) {
    User_1.default.findOne({ _id: id }, function (err, user) {
        var userInformation = {
            username: user.username,
            isAdmin: user.isAdmin
        };
        cb(err, userInformation);
    });
});
var port = process.env.PORT;
app.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password;
    return __generator(this, function (_b) {
        _a = req === null || req === void 0 ? void 0 : req.body, username = _a.username, password = _a.password;
        if (username || !password || typeof username !== "string" || typeof password !== "string") {
            res.send("N'oublies pas les conténus");
            return [2 /*return*/];
        }
        User_1.default.findOne({ username: username }, function (err, doc) { return __awaiter(void 0, void 0, void 0, function () {
            var hashedPassword, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (err) {
                            console.log(err);
                        }
                        if (doc)
                            res.send("User exists déjà veuillez");
                        if (!!doc) return [3 /*break*/, 3];
                        return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
                    case 1:
                        hashedPassword = _a.sent();
                        newUser = new User_1.default({
                            username: username,
                            password: hashedPassword
                        });
                        return [4 /*yield*/, newUser.save()];
                    case 2:
                        _a.sent();
                        res.send("Fait avec succes connection utilisateur Annette");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
app.post("/login", passport_1.default.authenticate("local", function (req, res) {
    res.send("Autentifier avec succes");
}));
app.get("/user", function (req, res) {
    res.send(req.user);
});
app.listen(4000, function () {
    console.log("[server]: Server is runnning at https : anny  localhost: ".concat(port));
});
//# sourceMappingURL=index.js.map