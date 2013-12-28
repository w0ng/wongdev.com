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

ARCHIVES_SAVE_AS = 'archives/index.html'
ARCHIVES_URL = 'archives/'
ARTICLE_LANG_SAVE_AS = 'blog/{slug}-{lang}/index.html'
ARTICLE_LANG_URL = 'blog/{slug}-{lang}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'
ARTICLE_URL = 'blog/{slug}/'
AUTHORS_SAVE_AS = 'authors/index.html'
AUTHORS_URL = 'authors/'
AUTHOR_SAVE_AS = 'author/{slug}/index.html'
AUTHOR_URL = 'author/{slug}/'
CATEGORIES_SAVE_AS = 'categories/index.html'
CATEGORIES_URL = 'categories/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'
CATEGORY_URL = 'category/{slug}/'
PAGE_LANG_SAVE_AS = 'pages/{slug}-{lang}/index.html'
PAGE_LANG_URL = 'pages/{slug}-{lang}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'
PAGE_URL = 'pages/{slug}/'
TAGS_SAVE_AS = 'tags/index.html'
TAGS_URL = 'tags/'
TAG_SAVE_AS = 'tag/{slug}/index.html'
TAG_URL = 'tag/{slug}/'

DEFAULT_PAGINATION = 5

PAGINATION_PATTERNS = (
    (1, '{base_name}/', '{base_name}/index.html'),
    (2, '{base_name}/page/{number}/', '{base_name}/page/{number}/index.html'),
)

THEME = '/home/w0ng/www/blog/wongdev-theme'
