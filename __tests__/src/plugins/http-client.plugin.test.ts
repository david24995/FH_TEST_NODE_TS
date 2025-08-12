import { httpClientPlugin } from '../../../src/plugins/http-client.plugin';

describe('plugins/http-cliente.plugin.ts', () => {
  it('HttpClientPlugin.get() should return a string', async () => {
    const data = await httpClientPlugin.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: expect.any(Boolean),
    });
  });

  it('HttpClientePlugin should have POST, PUT and DELETE methods', () => {
    expect(httpClientPlugin.post).rejects.toThrow();
    expect(httpClientPlugin.put).rejects.toThrow();
    expect(httpClientPlugin.delete).rejects.toThrow();
  });
});
