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

};


