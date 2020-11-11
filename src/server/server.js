const faker = require('faker');

function getShortNum() {
  return faker.commerce.color().length;
}

function getArray(mapFn) {
  return [...Array(getShortNum())].map(mapFn);
}

function generateData() {
  const products = [];
  const users = [];
  const tweets = [];
  const posts = [];

  function generateProducts() {
    for (let productIndex = 30; productIndex >= 0; productIndex--) {
      const id = faker.lorem.slug();
      const name = faker.commerce.productName();
      const price = faker.commerce.price();
      const imageUrl = faker.image.technics();
      const availableQty = faker.random.number();
      const material = faker.commerce.productMaterial();
      const category = faker.commerce.product();
      const description = faker.commerce.productDescription();
      const tags = getArray(faker.commerce.productAdjective);
      const createdAt = faker.date.past();
      const updatedAt = faker.date.past();

      const product = {
        id,
        name,
        price,
        imageUrl,
        availableQty,
        material,
        category,
        description,
        tags,
        createdAt,
        updatedAt,
      };

      products.push(product);
    }
  }

  function generateTweets(userId) {
    for (let tweetIndex = 10; tweetIndex >= 0; tweetIndex--) {
      const id = faker.random.uuid();
      const text = faker.lorem.sentences();
      const imageUrl = faker.image.image();
      const noLikes = faker.random.number();
      const noRetweets = faker.random.number();
      const noQuoteTweets = faker.random.number();
      const hashTags = getArray(faker.lorem.word);
      const mentions = getArray(faker.internet.userName);
      const createdAt = faker.date.past();

      const tweet = {
        id,
        userId,
        text,
        imageUrl,
        noLikes,
        noRetweets,
        noQuoteTweets,
        hashTags,
        mentions,
        createdAt,
      };

      tweets.push(tweet);
    }
  }

  function generatePosts(userId) {
    for (let postIndex = 6; postIndex >= 0; postIndex--) {
      const id = faker.lorem.slug();
      const description = faker.lorem.paragraph();
      const body = faker.lorem.paragraphs();
      const imageUrl = faker.image.image();
      const noLikes = faker.random.number();
      const readingTime = `${getShortNum()} mins`;

      const tags = getArray(faker.hacker.abbreviation);
      const createdAt = faker.date.past();

      const post = {
        id,
        userId,
        description,
        body,
        imageUrl,
        readingTime,
        noLikes,
        tags,
        createdAt,
      };

      posts.push(post);
    }
  }

  function generateUsers() {
    for (let userIndex = 20; userIndex >= 0; userIndex--) {
      const user = faker.helpers.userCard();
      const avatar = faker.image.avatar();
      const id = faker.helpers.slugify(user.username);

      generateTweets(id);
      generatePosts(id);

      const finalUser = {
        id,
        avatar,
        ...user,
      };
      users.push(finalUser);
    }
  }

  generateProducts();
  generateUsers();

  const data = {
    products,
    users,
    tweets,
    posts,
  };

  return data;
}

module.exports = generateData;
