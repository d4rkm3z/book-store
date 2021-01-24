import { Area } from '@alosaur';
import HomeController from '../controllers/HomeController.ts';

@Area({
  baseRoute: '/home',
  controllers: [HomeController]
})
export default class HomeArea {
}