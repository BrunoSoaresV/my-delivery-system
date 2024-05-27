const express = require('express');
const router = express.Router();
const pool = require('../db');

// Obter todos os endereços
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM addresses');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Obter endereço por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM addresses WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Criar novo endereço
router.post('/', async (req, res) => {
  const { lot } = req.body;
  try {
    const result = await pool.query('INSERT INTO addresses (lot) VALUES ($1) RETURNING *', [lot]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Atualizar endereço por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { lot } = req.body;
  try {
    const result = await pool.query('UPDATE addresses SET lot = $1 WHERE id = $2 RETURNING *', [lot, id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Deletar endereço por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM addresses WHERE id = $1', [id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
