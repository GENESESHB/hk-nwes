"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let MongoService = class MongoService {
    constructor() {
        this.uri = 'mongodb://localhost:27017/mydatabase';
    }
    async connect() {
        const client = await mongodb_1.MongoClient.connect(this.uri);
        return client;
    }
    async getCollection(collectionName) {
        const client = await this.connect();
        const db = client.db();
        return db.collection(collectionName);
    }
    async getAllData(collectionName) {
        const collection = await this.getCollection(collectionName);
        const data = await collection.find().toArray();
        return data;
    }
};
exports.MongoService = MongoService;
exports.MongoService = MongoService = __decorate([
    (0, common_1.Injectable)()
], MongoService);
//# sourceMappingURL=mongo.service.js.map