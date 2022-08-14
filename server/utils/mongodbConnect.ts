import {connect, Mongoose} from 'mongoose';
import bluebird from 'bluebird';

bluebird.promisifyAll(Mongoose);

async function dbConnect() {
    try {
        const connectionResult = await connect(`mongodb+srv://Domenic:dom123@cluster0.cwn2vpd.mongodb.net/?retryWrites=true&w=majority`)    
    } catch (error) {
        throw error
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

export default dbConnect
