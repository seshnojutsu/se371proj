require('dotenv').config();
const mongoose = require('mongoose');

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// ✅ Define Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// ✅ Create Model
const Person = mongoose.model('Person', personSchema);

// ✅ Create and Save a Person
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "John Doe",
    age: 25,
    favoriteFoods: ["pizza", "burger"]
  });

  person.save(function(err, savedPerson) {
    if (err) return done(err);
    return done(null, savedPerson);
  });
};

// 🔥 Leave the rest of the functions empty for now (FCC will ask you to implement them step by step)
const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  done(null /*, data*/);
};

// ✅ Export everything correctly
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
