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

  it('createBird should create a new bird', async () => {
    const resp = await await request(app).post('/api/v1/birds/create').send({
      latin_name: 'Psittaciformes',
      common_name: 'Parrot',
      habitat:
        'woodlands, rainforests, palm forests, savannas, grasslands, desert edges, scrubland',
      life_expectancy: '40 to 70 years',
      flightless: 'true',
      image_url:
        'https://cdn.shopify.com/s/files/1/1111/3280/files/parrot-hero-slide_5f608557-2722-4363-964c-856af23751ad_600x600.jpg?v=1608776007',
    });

    expect(resp.status).toEqual(200);
    expect(resp.body.latin_name).toEqual('Psittaciformes');
  });
  it('updateBird should update a bird', async () => {
    const resp = await request(app).put('/api/v1/birds/update/1').send({
      latin_name: 'Psittaciformes',
      common_name: 'Parrot',
      habitat: 'woodlands, rainforests, palm forests, savannas, grasslands, desert edges, scrubland',
      life_expectancy: '40 to 70 years',
      flightless: false,
      image_url: 'https://cdn.shopify.com/s/files/1/1111/3280/files/parrot-hero-slide_5f608557-2722-4363-964c-856af23751ad_600x600.jpg?v=1608776007',
    });
    console.log(resp.body);
    expect(resp.status).toEqual(200);
    expect(resp.body.latin_name).toEqual('Psittaciformes');
  });
  afterAll(() => {
    pool.end();
  });
});
