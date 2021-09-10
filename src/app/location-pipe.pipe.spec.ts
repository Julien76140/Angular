import { LocationPipePipe } from './location-pipe.pipe';

describe('LocationPipePipe', () => {
  it('create an instance', () => {
    const pipe = new LocationPipePipe();
    expect(pipe).toBeTruthy();
  });
  it('test change string location', () => {
    const pipe = new LocationPipePipe();
    let test : string ="azerty";
    const res: string="A.Z.E.R.T.Y.";
    test= pipe.transform(test);
    expect(test).toEqual(res);
  });
});
