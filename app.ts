import {
  App,
} from '@alosaur';
import HomeArea from './areas/HomeArea.ts';

const app = new App({
  areas: [HomeArea]
});

app.listen();