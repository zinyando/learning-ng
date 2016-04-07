import {Injectable} from 'angular2/core';

export class Albums {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class AlbumsService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Albums(1, 'one'),
  new Albums(2, 'two'),
  new Albums(3, 'three')
];

let promise = Promise.resolve(mock);
