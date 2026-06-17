export const languages = {
	ru: 'Русский',
	en: 'English',
} as const;

export const defaultLang = 'ru';
export const showDefaultLang = false;

export const ui = {
	ru: {
		// Shared UI
		'nav.home': 'Главная',
		'nav.about': 'Обо мне',
		'nav.projects': 'Проекты',
		'nav.blog': 'Блог',
		'nav.resume': 'Резюме',
		'nav.menu': 'Меню',
		'theme.dark': 'Тёмная',
		'theme.light': 'Светлая',
		'theme.switchToDark': 'Переключить на тёмную тему',
		'theme.switchToLight': 'Переключить на светлую тему',

		// Home page
		'meta.home.title': 'Антон | wrknbuycnsmndie',
		'meta.home.description':
			'Fullstack-разработчик. Проекты, заметки, эксперименты с AI и возможность обсудить разработку вашего проекта.',
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
		'home.posts.empty': 'Скоро здесь появятся технические заметки и мысли.',
		'home.posts.cta': 'Открыть блог',

		// About page
		'meta.about.title': 'Обо мне',
		'meta.about.description':
			'Разработка и поддержка веб-приложений, AI-интеграции, API, Telegram-боты и другие программные решения.',
		'about.title': 'Обо мне',
		'about.body':
			'Меня зовут Антон. Я занимаюсь fullstack-разработкой: создаю веб-приложения, backend-сервисы, API, Telegram-ботов и AI-интеграции. Открыт к новым проектам, интересным задачам и техническим обсуждениям.',

		// Projects page
		'meta.projects.title': 'Проекты',
		'meta.projects.description': 'Проекты, над которыми я работал.',
		'projects.title': 'Проекты',
		'projects.body': 'Здесь будут собраны проекты, кейсы и экспериментальные работы.',

		// Resume page
		'meta.resume.title': 'Резюме',
		'meta.resume.description': 'Моё резюме (спешиалли фо эчарс).',
		'resume.title': 'Резюме',
		'resume.body':
			'Здесь появится краткое резюме с опытом, навыками и ключевыми направлениями работы.',

		// Blog page
		'meta.blog.title': 'Блог',
		'meta.blog.description': 'Технические заметки, мысли и наблюдения.',
		'blog.title': 'Блог',
		'blog.body': 'Здесь будут публиковаться технические заметки, разборы и мысли по разработке.',
	},

	en: {
		// Shared UI
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.projects': 'Projects',
		'nav.blog': 'Blog',
		'nav.resume': 'Resume',
		'nav.menu': 'Menu',
		'theme.dark': 'Dark',
		'theme.light': 'Light',
		'theme.switchToDark': 'Switch to dark mode',
		'theme.switchToLight': 'Switch to light mode',

		// Home page
		'meta.home.title': 'Anton | wrknbuycnsmndie',
		'meta.home.description':
			'Full-stack developer. Projects, notes, AI experiments, and a place to discuss your software project.',
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
		'home.posts.empty': 'Technical notes and thoughts will appear here soon.',
		'home.posts.cta': 'Open blog',

		// About page
		'meta.about.title': 'About',
		'meta.about.description':
			'Web application development, AI integrations, APIs, Telegram bots, maintenance, and other software solutions.',
		'about.title': 'About',
		'about.body':
			"My name is Anton. I work as a full-stack developer: I build web applications, backend services, APIs, Telegram bots, and AI integrations. I'm open to new projects, interesting tasks, and technical discussions.",

		// Projects page
		'meta.projects.title': 'Projects',
		'meta.projects.description': 'Projects I have worked on.',
		'projects.title': 'Projects',
		'projects.body': 'Projects, case studies, and experimental work will be collected here.',

		// Resume page
		'meta.resume.title': 'Resume',
		'meta.resume.description': 'My resume, especially for HRs.',
		'resume.title': 'Resume',
		'resume.body':
			'A concise resume with experience, skills, and core areas of work will appear here.',

		// Blog page
		'meta.blog.title': 'Blog',
		'meta.blog.description': 'Technical notes, thoughts, and observations.',
		'blog.title': 'Blog',
		'blog.body': 'Technical notes, breakdowns, and development thoughts will be published here.',
	},
} as const;
