const db = require('../data/db-config.js');

module.exports = {
	findUserPosts,
};

function findUserPosts(id) {
	return db('posts as p') //  Remember to return the call to db
		.join('users as u', 'u.id', '=', 'p.user_id')
		.where({ user_id: id })
		.select('p.id', 'p.contents', 'u.username')
		.then(posts => {
			return posts
		});
};