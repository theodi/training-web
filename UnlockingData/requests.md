---
layout: default
title: Requests Exercise
long_title: Getting stuff from the web (exercise)
category: unlockingdata
link: /
weight: 1
---

## Overview

This exercise aims to walk you through how requests are made on the web and the different options to customise requsts in order to perform <b>Content</b> and <b>Language</b> nogition. 

As of writing this exercise is designed purely to accompany the examples given during the videos included in the accompanying presentation.

## Wikipedia

### Example 1 - How a machine does it

<pre><code>http://en.wikipedia.org/wiki/Albert_Einstein</code></pre>

### Example 2 - A Web Request

<pre><code>telnet en.wikipedia.org 80

GET /wiki/Albert_Einstein HTTP/1.1
Host: en.wikipedia.org</code></pre>

### Example 3 - Spanish please

<pre><code>http://en.wikipedia.org/wiki/Albert_Einstein
Accept-Language: es</code></pre>

Part 2

<pre><code>http://www.wikipedia.org/wiki/Albert_Einstein
Accept-Language: es</code></pre>

### Example 4 - What happened?

<pre><code>telnet www.wikipedia.org 80

GET /wiki/Albert_Einstein HTTP/1.1
Host: www.wikipedia.org</code></pre>

Part 2

<pre><code>telnet www.wikipedia.org 80

GET /wiki/Albert_Einstein HTTP/1.1
Host: www.wikipedia.org
Accept-Language: es</code></pre>

### Example 5 - Try again

<pre><code>http://www.wikipedia.org/wiki/Albert_Einstein
Accept: application/atom+xml</code></pre>

### Example 6 - and again

<pre><code>telnet www.wikipedia.org 80

GET /wiki/Albert_Einstein HTTP/1.1
Host: www.wikipedia.org
Accept: application/atom+xml</code></pre>

## DBPedia

### Example 7 

Part 1

<pre><code>http://dbpedia.org/page/Albert_Einstein

Accept-Language: es</code></pre>

Part 2

<pre><code>http://dbpedia.org/page/Albert_Einstein

Accept: application/json</code></pre>

Part 3

<pre><code>http://dbpedia.org/resource/Albert_Einstein

Accept: application/json</code></pre>

### Example 8

Part 1

<pre><code>telnet dbpedia.org 80

GET /resource/Albert_Einstein HTTP/1.1
Host: dbpedia.org</code></pre>

Part 2

<pre><code>telnet dbpedia.org 80

GET /page/Albert_Einstein HTTP/1.1
Host: dbpedia.org</code></pre>

Part 3

<pre><code>telnet dbpedia.org 80

GET /resource/Albert_Einstein HTTP/1.1
Host: dbpedia.org
Accept-Language: es</code></pre>

Part 3

<pre><code>telnet dbpedia.org 80

GET /resource/Albert_Einstein HTTP/1.1
Host: dbpedia.org
Accept: application/json</code></pre>

## Extension exercises

Why not try out different <b>Accept-Language</b> and <b>Accept</b> headers in order to get back different content representations.

Here are some example formats you can use in the accept header:

* application/json
* text/csv
* application/rdf+xml

## Example 9 - The Future

<pre><code>http://mementoarchive.lanl.gov/dbpedia/timegate/http://dbpedia.org/page/Albert_Einstein

Accept-Datetime: Thu, 31 May 2007 20:35:00 GMT</code></pre>
