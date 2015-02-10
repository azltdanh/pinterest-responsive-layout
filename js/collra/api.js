function collraApi()
{
	var _result = _generateResult(40);

	// generate 40 items.
	function _generateResult(count)
	{
		var result = [];
		for (var i=1; i <= count; i++)
		{
			result.push(_generateItem(i));
		}
		return result;
	}

	function _generateNumber(max)
	{
		return Math.floor(Math.random() * max) + 1;
	}


	function _generateText(maxlen)
	{
		var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut odio. Nam sed est. Nam a risus et est iaculis adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ut justo. In tincidunt viverra nisl. Donec dictum malesuada magna. Curabitur id nibh auctor tellus adipiscing pharetra. Fusce vel justo non orci semper feugiat. Cras eu leo at purus ultrices tristique."; 
		var len = _generateNumber(maxlen);
		return text.substring(0, len);
	}

	function _generateStatistic()
	{
		return {
			'views' : _generateNumber(500000),
			'likes' : _generateNumber(500000),
			'rating' : _generateNumber(5)
		}
	}

	function _generateImg()
	{
		return '/img/items/' + _generateNumber(40) + '.jpg'
	}


	function _generateUser()
	{
		var availableNames =
		[
			'Roger',
			'Ferm',
			'Leif-Gunnar',
			'Elofsson',
			'Björn',
			'Eklöf',
			'Maj-Len',
			'Lyth',
			'Bjorn',
			'Herlin',
			'Jocke', 
			'Widin',
			'Guido',
			'Paul',
			'Sören', 
			'Clavebring',
			'Jörgen',
			'Höjer',
			'Ann',
			'Annsson',
			'Malin',
			'Fritzell',
			'Alexander',
			'Johansson',
			'Christer',
			'Lindhök',
			'Patrik',
			'Hanberger',
			'Christian',
			'Nordin',
			'Janne'
		]

		var user = 
		{
			'first_name' : availableNames[_generateNumber(availableNames.length)-1],
			'last_name' : availableNames[_generateNumber(availableNames.length)-1],
			'screen_name' : availableNames[_generateNumber(availableNames.length)-1].substring(0, 2) + 
							availableNames[_generateNumber(availableNames.length)-1].substring(0, 2),
			'avatar' : '/img/user/avatar.png'
		}

		return user
	}

	function _generateTags()
	{
		var availableTags =
		[
			'Music & Movies',
			'Vehicle',
			'Antique & Design',
			'Jewelry & Watches',
			'Stamps & Coins',
			'Art',
			'Technica & Games',
			'Toys & Hobbies',
			'Fashion',
			'Photo',
			'Books & Magazine',
			'Furniture & Lighting',
			'Nostalgica',
			'Petroliana',
			'Jaguar',
			'Volvo Vintage Cars',
			'Vintage cars, older than 40',
			'Velocipediana',
			'Jemt-Olov Person',
			'Dalahorses',
			'Flygsfors',
			'Orrefors',
			'Berndt Friberg',
			'Lisa Larson',
			'Stig Lindberg',
			'Wilhelm Kåge',
			'Carl-Harry Stålhane',
			'Marianne Westman',
			'Corkscrews',
			'Thermoses',
			'Tin Cans',
			'Pins and Needles',
			'Playing Cards',
			'Advent Calendars',
			'Marianne Richter'
		]

		var tags = [];
		for (var i=0; i < _generateNumber(10); i++)
		{
			tags.push(availableTags[_generateNumber(availableTags.length)-1]);
		}

		return tags
	}

	function _generateItem(id)
	{
		var item = {

			'id' : id,
			'item' : {
				'title' : _generateText(75),
				'img' : _generateImg(),
				'description' : _generateText(512),
			},
			'user' : _generateUser(),
			'statistic' : _generateStatistic(),
			'tags' : _generateTags()
		};

		return item;
	}

	function _search(words)
	{
		return _result;
	}

	return {
		'search' : _search
	}
}