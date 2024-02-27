import mongoose from 'mongoose';

export const setupMongo = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    console.log('🔃 Connecting to DB...');

    await mongoose.connect(process.env.MONGO_URL as string);

    console.log('✅ DB connected!');
    console.log(process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
    throw new Error('❌ DB not connected.');
  }
};
