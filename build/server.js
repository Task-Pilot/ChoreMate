"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const sequelize_config_1 = __importDefault(require("./db-config/sequelize-config"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); //Allow different domains to access endpoints in backend
app.use(express_1.default.json()); // parse requests of content-type - application/json
console.log(process.env.NODE_ENV);
// Database initiate and sync
sequelize_config_1.default.sequelizeInstance.sync();
if (((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trim()) === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "../frontend/build"))); // Pointing to the Express server where the React build is.
    app.get("/*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "../frontend/build", "index.html"));
    });
}
else if (((_b = process.env.NODE_ENV) === null || _b === void 0 ? void 0 : _b.trim()) === "development") {
    sequelize_config_1.default.sequelizeInstance.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
    });
    app.get("/", (req, res) => {
        res.send("From BACKEND (Port 5000): Choremate");
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
