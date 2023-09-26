const mongoose = require('mongoose')

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })

      console.log(`MongoDB Connected: ${conn.connection.host}`)
   } catch (error) {
      console.error(error)
      process.exit(1)
   }

//    mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//   },).then((res) => {
//       console.log(`MongoDB Connected: ${res.connection.host}`);
//    }).catch(error => {
//       console.log(error)
//    });
}

module.exports = connectDB