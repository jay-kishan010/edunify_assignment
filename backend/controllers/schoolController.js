// backend/controllers/schoolController.js
import db from '../config/db.js';


export const addSchool = (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file.filename;
  const sql = `
    INSERT INTO schools (name, address, city, state, contact, image, email_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [name, address, city, state, contact, image, email_id], (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: 'School added successfully' });
  });
};

export const getSchools = (req, res) => {
  const sql = 'SELECT id, name, address, city, image FROM schools';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
};
