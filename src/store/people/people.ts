import { writable, Readable } from 'svelte/store';

export interface Person {
  id: number;
  name: string;
}

// Use a Writable store underneath but only expose an "add" method on a Readable store
export class Store implements Readable<Person> {
  public subscribe;
  private readonly update;

  constructor(people: Person[] = []) {
    const { subscribe, update } = writable(people);

    this.subscribe = subscribe;
    this.update = update;
  }

  add(name: string): void {
    this.update(people => [...people, {id: people.length+1, name}]);
  }
}

export default new Store([{id: 1, name: 'Rich Harris'}, {id: 1, name: 'Jeremey Ashkenas'}]);
