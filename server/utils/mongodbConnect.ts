import {connect, Mongoose} from 'mongoose';
import bluebird from 'bluebird';
import {MONGODB_URL} from '../config/environment';

bluebird.promisifyAll(Mongoose);

async function dbConnect() {
  try {
    const connectionResult = await connect(MONGODB_URL);
  } catch (error) {
    console.log(
      '🚀 ~ file: mongodbConnect.ts ~ line 11 ~ dbConnect ~ error',
      error
    );
    throw error;
  }
}

/*
    MONGOOSE

    .deleteMany()
    .deleteOne()
    .find()
    .findById()
    .findByIdAndDelete()
    .findByIdAndRemove()
    .findByIdAndUpdate()
    .findOne()
    .findOneAndDelete()
    .findOneAndRemove()
    .findOneAndUpdate()
    .replaceOne()
    .updateMany
    .updateOne()
*/

export default dbConnect;
