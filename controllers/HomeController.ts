import { Controller, Get } from '@alosaur';

@Controller()
export default class HomeController {
  @Get()
  getRoot() {
    return 'hello world';
  }
}