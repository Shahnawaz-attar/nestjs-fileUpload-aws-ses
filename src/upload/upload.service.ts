// src/upload/upload.service.ts
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UploadDocument } from './upload.schema';

@Injectable()
export class UploadService {
  constructor(@InjectModel(UploadDocument.name) private readonly yourModel: Model<UploadDocument>) {}

  async processFilesFromDirectory() {
    const uploadDir = './uploads'; // Assuming your files are in this directory
    const files = fs.readdirSync(uploadDir);

    for (const file of files) {
      try {
        const fileName = path.join(uploadDir, file);
        const workbook = XLSX.readFile(fileName);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Now, you can save this JSON data to MongoDB using Mongoose
        // Assuming you have a Mongoose model called YourDocumentName
        await this.yourModel.create(jsonData);
      } catch (error) {
        // Handle any errors, e.g., invalid format, or database errors
        console.error(`Error processing file '${file}': ${error.message}`);
      }
    }

    return { message: 'Files processed successfully' };
  }
}
