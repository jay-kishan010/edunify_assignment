// backend/models/schoolModel.js
import db from '../config/db.js';

const createSchoolTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name TEXT,
      address TEXT,
      city TEXT,
      state TEXT,
      contact VARCHAR(15),
      image TEXT,
      email_id TEXT
    )
  `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Schools table created');
  });
};




export default createSchoolTable;