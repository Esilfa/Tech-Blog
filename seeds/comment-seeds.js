const { Comment } = require('../models');	
	
	const commentData = [{

	comment_text:  'Motivation',
	user_id: 1,
	post_id: 1
	},
	{
	comment_text:'Fun Fact!' ,
	user_id: 2,
	post_id: 2
	},
	{
	comment_text:'Did you know?' ,
	user_id: 3,
	post_id: 3
	}
	];
	
	const seedComments = () => Comment.bulkCreate(commentData);

	module.exports = seedComments;