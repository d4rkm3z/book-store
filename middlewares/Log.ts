import { Middleware, MiddlewareTarget, Context } from '@alosaur';

@Middleware(new RegExp('/'))
export class Log<TState = unknown> implements MiddlewareTarget<TState> {
  date: Date = new Date();

  onPreRequest(context: Context<TState>) {
    return new Promise<void>((resolve, reject) => {
      this.date = new Date();
      resolve();
    });
  }

  onPostRequest(context: Context<TState>) {
    return new Promise<void>((resolve, reject) => {
      console.log(new Date().getTime() - this.date.getTime());
      resolve();
    });
  }
}