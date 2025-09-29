const request = require('supertest');
const app = require('../index'); // now works because index.js is one folder up

describe('GET /', () => {
  it('responds with JSON {ok: true}', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
