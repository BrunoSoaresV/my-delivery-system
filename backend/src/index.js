const express = require('express');
const cors = require('cors');
const addressesRouter = require('./routes/addresses');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/addresses', addressesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
