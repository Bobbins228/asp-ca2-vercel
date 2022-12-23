import dotenv from 'dotenv';
import reviewModel from '../api/reviews/reviewModel'
import reviews from "./reviews"
dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.log(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.log(`failed to Load user Data: ${err}`);
  }
}

async function loadReviews() {
  console.log('load review Data');
  try {
    await reviewModel.deleteMany();
    await reviewModel.collection.insertMany(reviews)
    .then(console.log(`${reviews.length} reviews were successfully stored.`))
  } catch (err) {
    console.error(`failed to Load review Data: ${err}`);
  }
}
// deletes all genre documents in collection and inserts test data
async function loadGenres() {
    console.log('load genre Data');
    try {
      await genreModel.deleteMany();
      await genreModel.collection.insertMany(genres);
      console.log(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genre Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadReviews();
}