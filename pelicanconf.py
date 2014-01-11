#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'w0ng'
DEFAULT_DATE = 'fs'
DEFAULT_DATE_FORMAT = '%d %b %Y'
SITENAME = 'wongdev.com'
SITESUBTITLE = ''
SITEURL = ''
TIMEZONE = 'Australia/Sydney'

ARCHIVES_SAVE_AS = 'blog/archives/index.html'
ARCHIVES_URL = 'blog/archives/'
ARTICLE_LANG_SAVE_AS = 'blog/{slug}-{lang}/index.html'
ARTICLE_LANG_URL = 'blog/{slug}-{lang}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'
ARTICLE_URL = 'blog/{slug}/'
#AUTHORS_SAVE_AS = 'blog/authors/index.html'
#AUTHORS_URL = 'blog/authors/'
#AUTHOR_SAVE_AS = 'blog/authors/{slug}/index.html'
#AUTHOR_URL = 'blog/authors/{slug}/'
#CATEGORIES_SAVE_AS = 'blog/categories/index.html'
#CATEGORIES_URL = 'blog/categories/'
#CATEGORY_SAVE_AS = 'blog/categories/{slug}/index.html'
#CATEGORY_URL = 'blog/categories/{slug}/'
AUTHORS_SAVE_AS = ''
AUTHORS_URL = ''
AUTHOR_SAVE_AS = ''
AUTHOR_URL = ''
CATEGORIES_SAVE_AS = ''
CATEGORIES_URL = ''
CATEGORY_SAVE_AS = ''
CATEGORY_URL = ''
TAGS_SAVE_AS = 'blog/tags/index.html'
TAGS_URL = 'blog/tags/'
TAG_SAVE_AS = 'blog/tags/{slug}/index.html'
TAG_URL = 'blog/tags/{slug}/'

PAGE_LANG_SAVE_AS = '{slug}-{lang}/index.html'
PAGE_LANG_URL = '{slug}-{lang}/'
PAGE_SAVE_AS = '{slug}/index.html'
PAGE_URL = '{slug}/'

DEFAULT_PAGINATION = 10
PAGINATION_PATTERNS = (
    (1, '{base_name}/', '{base_name}/index.html'),
    (2, '{base_name}/page/{number}/', '{base_name}/page/{number}/index.html'),
)

THEME = '/home/w0ng/www/blog/wongdev-theme'
THEME_STATIC_DIR = ''

STATIC_PATHS = [
    'img',
    'extra/.htaccess',
    'extra/crossdomain.xml',
    'extra/humans.txt',
    'extra/robots.txt',
    ]
EXTRA_PATH_METADATA = {
    'extra/.htaccess': {'path': '.htaccess'},
    'extra/crossdomain.xml': {'path': 'crossdomain.xml'},
    'extra/humans.txt': {'path': 'humans.txt'},
    'extra/robots.txt': {'path': 'robots.txt'},
    }

MENUITEMS = (
        ('RSS','http://wongdev.com/feeds/all.atom.xml'),
)

#DIRECT_TEMPLATES = (('index', 'tags', 'categories', 'authors', 'archives'))
DIRECT_TEMPLATES = (('index', 'tags', 'archives'))
