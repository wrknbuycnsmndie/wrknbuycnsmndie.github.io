export const languages = {
	ru: 'Русский',
	en: 'English',
} as const;

export const defaultLang = 'ru';

export const ui = {
	// Russian translations
	ru: {
		// Site identity
		'site.name': 'wrknbuycnsmndie',
		'site.author': 'Антон Чапала',
		'site.author.jobTitle': 'Fullstack-разработчик',
		'site.description': 'Портфолио и блог fullstack-разработчика.',

		// Navigation
		'nav.home': 'Главная',
		'nav.about': 'Обо мне',
		'nav.projects': 'Проекты',
		'nav.blog': 'Блог',
		'nav.resume': 'Резюме',
		'nav.menu': 'Меню',

		// Theme
		'theme.dark': 'Тёмная',
		'theme.light': 'Светлая',
		'theme.switchToDark': 'Переключить на тёмную тему',
		'theme.switchToLight': 'Переключить на светлую тему',

		// Meta: pages
		'meta.home.title': 'Антон | wrknbuycnsmndie',
		'meta.home.description':
			'Fullstack-разработчик. Проекты, заметки, эксперименты с AI и возможность обсудить разработку вашего проекта.',
		'meta.about.title': 'Обо мне',
		'meta.about.description':
			'Разработка и поддержка веб-приложений, AI-интеграции, API, Telegram-боты и другие программные решения.',
		'meta.projects.title': 'Проекты',
		'meta.projects.description': 'Проекты, над которыми я работал.',
		'meta.resume.title': 'Резюме',
		'meta.resume.description': 'Моё резюме (спешиалли фо эчарс).',
		'meta.blog.title': 'Блог',
		'meta.blog.description': 'Технические заметки, мысли и наблюдения.',

		// Home page
		'home.hero.title': 'Привет, меня зовут Антон.',
		'home.hero.lead':
			'Я Fullstack-разработчик с основным опытом с React и Node.js и экосистемой вокруг JS/TS.',
		'home.hero.body':
			'Здесь я буду делиться своими проектами, экспериментами и различными мыслями в блоге. Если вам нужна помощь с разработкой, поддержкой или развитием продукта, я буду рад обсудить задачу/фуллтайм работу.',
		'home.projects.title': 'Проекты',
		'home.projects.empty': 'Скоро здесь появятся проекты, над которыми я работал.',
		'home.projects.cta': 'Открыть проекты',
		'home.resume.title': 'Резюме',
		'home.resume.empty': 'Информация об опыте и навыках скоро появится.',
		'home.resume.cta': 'Открыть резюме',
		'home.posts.title': 'Блог/Заметки',
		'home.posts.body': 'Технические заметки и мысли.',
		'home.posts.cta': 'Открыть блог',

		// About page
		'about.title': 'Обо мне',
		'about.body':
			'Здесь разместятся несколько блоков обо мне, пока - в процессе генерации идеи',

		// Projects page
		'projects.title': 'Проекты',
		'projects.body': 'Подборка проектов, пакетов и различных экспериментов.',
		'projects.techLabel': 'Технологии',
		'projects.linksLabel': 'Ссылки проекта',

		// Resume page
		'resume.title': 'Резюме',
		'resume.body':
			'Здесь появится краткое резюме с опытом, навыками и ключевыми направлениями работы.',

		// Blog: page
		'blog.title': 'Блог',
		'blog.body': 'Технические заметки, разборы и различные мысли.',

		// Blog: search
		'blog.search.input': 'Поиск',
		'blog.search.placeholder': 'Название, тег или ключевое слово',
		'blog.search.tags': 'Тег',
		'blog.search.allTags': 'Все теги',
		'blog.search.sort': 'Сортировка',
		'blog.search.newest': 'Сначала новые',
		'blog.search.oldest': 'Сначала старые',
		'blog.search.results': 'Найдено',
		'blog.search.clear': 'Сбросить',
		'blog.search.empty': 'Посты не найдены.',
		'blog.search.items': 'постов',

		// Blog: tags
		'blog.tags.all': 'Все посты',
		'blog.tags.more': 'Все теги',
		'blog.tags.current': 'Текущий тег',
		'blog.tags.posts': 'постов',
		'blog.tags.pageTitle': 'Посты с тегом',
		'blog.tags.pageDescription': 'Посты с тегом',

		// Blog: pagination
		'blog.pagination.previous': 'Назад',
		'blog.pagination.next': 'Вперёд',
		'blog.pagination.first': 'Первая',
		'blog.pagination.last': 'Последняя',
		'blog.pagination.page': 'Страница',
		'blog.pagination.of': 'из',

		// Blog: code blocks
		'blog.code.copy': 'Копировать',
		'blog.code.copied': 'Скопировано',
		'blog.code.failed': 'Ошибка',
		'blog.code.copyAria': 'Скопировать код',
	},

	// English translations
	en: {
		// Site identity
		'site.name': 'wrknbuycnsmndie',
		'site.author': 'Anton Chapala',
		'site.author.jobTitle': 'Full-stack developer',
		'site.description': 'Portfolio and blog of full-stack developer.',

		// Navigation
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.projects': 'Projects',
		'nav.blog': 'Blog',
		'nav.resume': 'Resume',
		'nav.menu': 'Menu',

		// Theme
		'theme.dark': 'Dark',
		'theme.light': 'Light',
		'theme.switchToDark': 'Switch to dark mode',
		'theme.switchToLight': 'Switch to light mode',

		// Meta: pages
		'meta.home.title': 'Anton | wrknbuycnsmndie',
		'meta.home.description':
			'Full-stack developer. Projects, notes, AI experiments, and a place to discuss your software project.',
		'meta.about.title': 'About',
		'meta.about.description':
			'Web application development, AI integrations, APIs, Telegram bots, maintenance, and other software solutions.',
		'meta.projects.title': 'Projects',
		'meta.projects.description': 'Projects I have worked on.',
		'meta.resume.title': 'Resume',
		'meta.resume.description': 'My resume, especially for HRs.',
		'meta.blog.title': 'Blog',
		'meta.blog.description': 'Technical notes, thoughts, and observations.',

		// Home page
		'home.hero.title': "Hi, I'm Anton.",
		'home.hero.lead':
			'I am a full-stack developer focused on React, Node.js, and the JS/TS ecosystem around them.',
		'home.hero.body':
			'I will share my projects, experiments, and different thoughts on the blog here. If you need help building, maintaining, or improving a product, I would be happy to discuss the task or full-time work.',
		'home.projects.title': 'Projects',
		'home.projects.empty': 'Projects I have worked on will appear here soon.',
		'home.projects.cta': 'Open projects',
		'home.resume.title': 'Resume',
		'home.resume.empty': 'My experience and skills will be available soon.',
		'home.resume.cta': 'Open resume',
		'home.posts.title': 'Posts',
		'home.posts.body': 'Technical notes and thoughts',
		'home.posts.cta': 'Open blog',

		// About page
		'about.title': 'About',
		'about.body':
		'A few blocks about me will be placed here, currently in the process of generating ideas.',

		// Projects page
		'projects.title': 'Projects',
		'projects.body': 'Collection of my projects, packages, and some experiments.',
		'projects.techLabel': 'Technologies',
		'projects.linksLabel': 'Project links',

		// Resume page
		'resume.title': 'Resume',
		'resume.body':
			'A concise resume with experience, skills, and core areas of work will appear here.',

		// Blog: page
		'blog.title': 'Blog',
		'blog.body': 'Technical notes, breakdowns, and different thoughts.',

		// Blog: search
		'blog.search.input': 'Search',
		'blog.search.placeholder': 'Title, tag, or keyword',
		'blog.search.tags': 'Tag',
		'blog.search.allTags': 'All tags',
		'blog.search.sort': 'Sort',
		'blog.search.newest': 'Newest first',
		'blog.search.oldest': 'Oldest first',
		'blog.search.results': 'Found',
		'blog.search.clear': 'Reset',
		'blog.search.empty': 'No posts found.',
		'blog.search.items': 'posts',

		// Blog: tags
		'blog.tags.all': 'All posts',
		'blog.tags.more': 'All tags',
		'blog.tags.current': 'Current tag',
		'blog.tags.posts': 'posts',
		'blog.tags.pageTitle': 'Posts tagged',
		'blog.tags.pageDescription': 'Posts tagged',

		// Blog: pagination
		'blog.pagination.previous': 'Previous',
		'blog.pagination.next': 'Next',
		'blog.pagination.first': 'First',
		'blog.pagination.last': 'Last',
		'blog.pagination.page': 'Page',
		'blog.pagination.of': 'of',

		// Blog: code blocks
		'blog.code.copy': 'Copy',
		'blog.code.copied': 'Copied',
		'blog.code.failed': 'Failed',
		'blog.code.copyAria': 'Copy code',
	},
} as const;
