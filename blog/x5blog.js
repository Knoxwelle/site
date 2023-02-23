x5engine.settings.imBlog = {
	root: 'http://blog/',
	home_posts_number: 10,
	card_type: 'leftcoverrightcontents',
	show_card_title: true,
	show_card_category: true,
	show_card_description: true,
	show_card_author: true,
	show_card_date: true,
	show_card_button: true,
	article_type: 'titlecovercontents',
	file_prefix: 'x5_',
	comments: false,
	comments_source: 'external',
	comments_code: '<div id="fb-root"></div><div class="fb-comments" data-href="http://127.0.0.1:8080/blog/index.php" data-numposts="5" data-width="100%" data-colorscheme="light"></div><script>$(".fb-comments").attr("data-href", location.href);(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";fjs.parentNode.insertBefore(js, fjs);}(document, \'script\', \'facebook-jssdk\'));</script>',

highlight_mode: 'none',
	categories: ['Категория'],
	posts: [],
	posts_cat: [],
	posts_month: [],
	posts_ids: [],
	posts_slug: []
};

var post = null;

// Post titled "Заголовок"
x5engine.settings.imBlog.posts['000000005'] = {
	id: '000000005',
	title: 'Заголовок',
	slug: '---------post1',
	rel_url: '?---------post1',
	author: '',
	category: 'Категория',
	cover: '',
	summary: '',
	sources: [],
	body: '<div id="imBlogPost_000000005">Статья<div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '2/10/2022',
	utc_time: new Date(2022,9,3,4,10,0),
	month: '202210',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['Категория'] == null) x5engine.settings.imBlog.posts_cat['Категория'] = [];
x5engine.settings.imBlog.posts_cat['Категория'][x5engine.settings.imBlog.posts_cat['Категория'].length] = '000000005';
if (x5engine.settings.imBlog.posts_month['202210'] == null) x5engine.settings.imBlog.posts_month['202210'] = [];
x5engine.settings.imBlog.posts_month['202210'][x5engine.settings.imBlog.posts_month['202210'].length] = '000000005';
x5engine.settings.imBlog.posts_slug['---------post1'] = '000000005';

// IDs summary
x5engine.settings.imBlog.posts_ids = ['000000005'];

x5engine.boot.push("x5engine.imBlog.show()");
x5engine.boot.push("x5engine.imForm.initForm('#blogComment')");

// End of file x5blog.js