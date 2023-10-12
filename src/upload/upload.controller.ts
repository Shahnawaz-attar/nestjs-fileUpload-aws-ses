// src/upload/upload.controller.ts
import { Controller, Post } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('process-files')
  async processFiles() {
    const result = await this.uploadService.processFilesFromDirectory();
    return { message: 'Files processed', data: result };
  }
}
