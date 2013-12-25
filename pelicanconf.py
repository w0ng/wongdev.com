#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'w0ng'
DEFAULT_CATEGORY = 'misc'
DEFAULT_DATE = 'fs'
DEFAULT_DATE_FORMAT = '%d %b %Y'
DISPLAY_CATEGORIES_ON_MENU = 'True'
PAGE_EXCLUDES = ()
SITENAME = 'wongdev.com'
SITESUBTITLE = ''
SITEURL = ''
STATIC_PATHS = ['images']
TIMEZONE = 'Australia/Sydney'
SUMMARY_MAX_LENGTH = 50

ARTICLE_URL = 'blog/{slug}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'
ARTICLE_LANG_URL = 'blog/{slug}-{lang}/'
ARTICLE_LANG_SAVE_AS = 'blog/{slug}-{lang}/index.html'
PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'
PAGE_LANG_URL = 'pages/{slug}-{lang}/'
PAGE_LANG_SAVE_AS = 'pages/{slug}-{lang}/index.html'
CATEGORIES_URL = 'categories/'
CATEGORIES_SAVE_AS = 'categories/index.html'
CATEGORY_URL = 'category/{slug}/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'
TAG_URL = 'tag/{slug}/'
TAG_SAVE_AS = 'tag/{slug}/index.html'
TAGS_URL = 'tags/'
TAGS_SAVE_AS = 'tags/index.html'
AUTHOR_URL = 'author/{slug}/'
AUTHOR_SAVE_AS = 'author/{slug}/index.html'
AUTHORS_URL = 'authors/'
AUTHORS_SAVE_AS = 'authors/index.html'
ARCHIVES_URL = 'archives/'
ARCHIVES_SAVE_AS = 'archives/index.html'

FEED_ALL_ATOM = 'feeds/all.atom.xml'
FEED_ALL_RSS = 'feed/all.rss.xml'

DEFAULT_ORPHANS = 0
DEFAULT_PAGINATION = 5

THEME = '/home/w0ng/www/blog/wongdev-theme'

PAGINATION_PATTERNS = (
    (1, '{base_name}/', '{base_name}/index.html'),
    (2, '{base_name}/page/{number}/', '{base_name}/page/{number}/index.html'),
)

#DELETE_OUTPUT_DIRECTORY = True
