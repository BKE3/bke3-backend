const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('getAll birds', async () => {
    const resp = await request(app).get('/api/v1/birds');

    expect(resp.status).toBe(200);
    expect(resp.body[0].id).toBe('1');
  });
  afterAll(() => {
    pool.end();
  });
});
