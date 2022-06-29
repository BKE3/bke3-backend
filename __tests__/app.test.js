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

  it('getBirdById should return one bird with all the detail', async () => {
    const resp = await request(app).get('/api/v1/birds/1');
    expect(resp.status).toBe(200);
    expect(resp.body.id).toBe('1');
    expect(resp.body.latin_name).toBe('Cyanocitta');
  });
  afterAll(() => {
    pool.end();
  });
});
