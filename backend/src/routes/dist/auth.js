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
exports.__esModule = true;
exports.getLogin = exports.getRegister = void 0;
var bcryptjs_1 = require("bcryptjs");
var User_1 = require("../models/User");
var express_1 = require("express");
express_1["default"].Router();
exports.getRegister = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var salt, hashedPassword, newUser, user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, bcryptjs_1["default"].genSalt(10)];
            case 1:
                salt = _a.sent();
                return [4 /*yield*/, bcryptjs_1["default"].hashSync(req.body.password, salt)];
            case 2:
                hashedPassword = _a.sent();
                newUser = new User_1["default"]({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword
                });
                return [4 /*yield*/, newUser.save()];
            case 3:
                user = _a.sent();
                res.status(200).json(user);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                res.status(500).json(err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, validPassword, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, User_1["default"].findOne({ email: req.body.email })];
            case 1:
                user = _a.sent();
                !user && res.status(404).json("user not found");
                return [4 /*yield*/, bcryptjs_1["default"].compare(req.body.password, user === null || user === void 0 ? void 0 : user.password)];
            case 2:
                validPassword = _a.sent();
                !validPassword && res.status(400).json("wrong passwor   mot de pass invalid");
                res.status(200).json(user);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(500).json(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// // export const getRegister = async (req: Request, res: Response) => {}
// export  const isAdministratorMiddleware = (req: Request, res: Response, next: NextFunction) =>{
//    const {user} : any = req;
//    if (user) {
//      User.findOne({ username: user.username}, (err: Error, doc:  DatabaseUserInterface) =>{
//        if (err) throw err;
//        if (doc?.isAdmin){
//          next ()
//        }
//        else{
//          res.send("Désolé, seuls les administrateurs peuvent effectuer cette opération.")
//        }
//      })
//      }
//      else{
//        res.send("Désolé, vous n'êtes pas connecté.")
//      }
//    }
//  export const getLogout = (req: { logout: (arg0: (err: any) => any) => void; },res: { redirect: (arg0: string) => void; send: (arg0: string) => void; }, next: (arg0: any) => any)=>{
//    req.logout(function(err){
//      if (err) {return next (err);}
//      res.redirect('/login')
//    });
//    res.send("success")
//  };
//  export const postDeleteUser =async (req: Request, res: Response) =>{
//    const {id} = req.body;
//    await User.findByIdAndDelete(id, (err: Error) =>{
//      if (err)throw err;
//    });
//    res.send("sucess")
//  }
//  export const getAllusers = async (res : Response)=>{
//    await  User.find({}, (err : Error,  data : DatabaseUserInterface[])=>{
//      if(err) throw err;
//      const filterdUsers: UserInterface[] = [];
//      data.forEach((item : DatabaseUserInterface) =>{
//        const userInformation = {
//          id: item._id,
//          username: item.username,
//          isAdmin: item.isAdmin
//        }
//        filterdUsers.push(userInformation);
//    });
//    res.send(filterdUsers);
//  })
//  }
