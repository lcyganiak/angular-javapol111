import { ToLongPipe } from './to-long.pipe';

describe('ToLongPipe', () => {
  it('create an instance', () => {
    const pipe = new ToLongPipe();
    expect(pipe).toBeTruthy();
  });
});
