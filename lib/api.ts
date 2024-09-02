export class Http {
  private base: string;

  constructor() {
    this.base = 'http://localhost:1337/api';
  }

  async get(path: string) {
    const response = await fetch(`${this.base}/${path}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  }
}
