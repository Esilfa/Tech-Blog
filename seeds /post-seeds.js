const { Post } = require('../models');

const postData = [{

    title: 'Lets stay motivated!',
    content: 'If you do not innovate fast, disrupt your industry, disrupt yourself, you will be left behind. - John Chambers, CEO of Cisco',
    user_id: 1
	
	},
{
    title: 'First cellular/mobile phone ever!',
    content: 'Motorola released the world’s first mobile phone, the DynaTAC 8000x, in 1983.',
    user_id: 2
},
{
    title: 'What Was The First Ever .COM Domain?',
    content: 'Symbolics Inc. registered the first .COM domain on March 15, 1985. For obvious reasons, the company chose to register Symbolics.com on the World Wide Web.',
    user_id: 3
}
	];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
