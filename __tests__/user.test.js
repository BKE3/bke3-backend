const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const UserService = require('../lib/services/UserService');

const aUser = {
  email: 'Pete',
  password: '23094343434',
};

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should create a user in our backend', async () => {
    const res = await request(app).post('/api/v1/users').send(aUser);
    const { email } = aUser;

    expect(res.body).toEqual({
      id: expect.any(String),
      email,
    });
  });
});
