import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoService {
  private readonly uri = 'mongodb://localhost:27017/mydatabase';

  async connect(): Promise<MongoClient> {
    const client = await MongoClient.connect(this.uri);
    return client;
  }

  async getCollection(collectionName: string) {
    const client = await this.connect();
    const db = client.db();
    return db.collection(collectionName);
  }

  async getAllData(collectionName: string): Promise<any[]> {
    const collection = await this.getCollection(collectionName);
    const data = await collection.find().toArray();
    return data;
  }
}
