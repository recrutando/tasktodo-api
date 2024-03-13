import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(): { online: string, comBugs: string } {
    return {
      online: 'SEMPRE',
      comBugs: 'SEMPRE',
    };
  }
}
