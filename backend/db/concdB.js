const mongoose = require('mongoose');
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      ssl: true,
    });
    console.log('COnnected to DB');
  } catch (err) {
    console.log('Db connection unsuccessfull', err.message);
  }
};

module.exports = connect;
