#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

SITEURL = 'http://wongdev.com'
RELATIVE_URLS = False
FEEDBURNER_ALL_URL = 'http://feeds.feedburner.com/wongdev'

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

DISQUS_SITENAME = 'wongdev'
GOOGLE_ANALYTICS = 'UA-37775953-1'

