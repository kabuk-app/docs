import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Kabuk',
	base: '/docs/',
	cleanUrls: true,
	outDir: '../dist/docs',
	locales: {
	root: {
		label: 'English',
		lang: 'en',
		themeConfig: {
			nav: [
				{ text: 'Introduction', link: '/introduction' },
				{ text: 'Install', link: '/install' },
				{ text: 'Security overview', link: '/security' }
			]
		}
	},
	tr: {
		label: 'Türkçe',
		lang: 'tr',
		themeConfig: {
			nav: [
				{ text: 'Giriş', link: '/tr/introduction' },
				{ text: 'Kurulum', link: '/tr/install' },
				{ text: 'Güvenliğe genel bakış', link: '/tr/security' }
			]
		}
	},
	kk: {
		label: 'Қазақша',
		lang: 'kk',
		themeConfig: {
			nav: [
				{ text: 'Кіріспе', link: '/kk/introduction' },
				{ text: 'Орнату', link: '/kk/install' },
				{ text: 'Қауіпсіздікке шолу', link: '/kk/security' }
			]
		}
	},
	ru: {
		label: 'Русский',
		lang: 'ru',
		themeConfig: {
			nav: [
				{ text: 'Введение', link: '/ru/introduction' },
				{ text: 'Установка', link: '/ru/install' },
				{ text: 'Обзор безопасности', link: '/ru/security' }
			]
		}
	}
	}
});
