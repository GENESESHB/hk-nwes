import { MongoClient } from 'mongodb';
export declare class MongoService {
    private readonly uri;
    connect(): Promise<MongoClient>;
    getCollection(collectionName: string): Promise<import("mongodb").Collection<import("mongodb").Document>>;
    getAllData(collectionName: string): Promise<any[]>;
}
