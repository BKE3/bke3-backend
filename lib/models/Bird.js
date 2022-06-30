const pool = require('../utils/pool');

module.exports = class Bird {
  id;
  latin_name;
  common_name;
  habitat;
  life_expectancy;
  flightless;
  image_url;

  constructor(row){
    this.id = row.id;
    this.latin_name = row.latin_name;
    this.common_name = row.common_name;
    this.habitat = row.habitat;
    this.life_expectancy = row.life_expectancy;
    this.flightless = row.flightless;
    this.image_url = row.image_url;
  }

  static async getAll(){
    const { rows } = await pool.query(
      'SELECT * FROM birds',
      []
    );
    return rows.map((bird) => new Bird(bird));
  }
  static async getBirdById(id){
    const { rows } = await pool.query(
      'SELECT * FROM birds WHERE id = $1',
      [id]
    );
    return new Bird(rows[0]);
  }

  static async insert({ latin_name, common_name, habitat, life_expectancy, flightless, image_url }){
    const { rows } = await pool.query(
      'INSERT INTO birds (latin_name, common_name, habitat, life_expectancy, flightless, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [latin_name, common_name, habitat, life_expectancy, flightless, image_url]
    );
    return new Bird(rows[0]);
  }
  static async updateById(id, attrs) {
    const bird = await Bird.getBirdById(id);
    if(!bird) return null;
    const { latin_name, common_name, habitat, life_expectancy, flightless, image_url } = { ...bird, ...attrs };
    const { rows } = await pool.query(
      `UPDATE birds
      SET latin_name = $2 , common_name = $3, habitat = $4, life_expectancy = $5, flightless = $6, image_url = $7
      WHERE id = $1
      RETURNING *`,
      [id, latin_name, common_name, habitat, life_expectancy, flightless, image_url]
    );
    return new Bird(rows[0]);
  }
};


