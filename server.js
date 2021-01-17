const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;
const conn_url =
  'mongodb+srv://Akash:ogG2MaEOvCFGgUL9@memories.biucn.mongodb.net/Memories?retryWrites=true&w=majority';

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('api running...'));

app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => console.log(`server started at ${PORT}`));

try {
  mongoose.connect(conn_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log('Database connected...');
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
