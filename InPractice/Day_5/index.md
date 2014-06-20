---
layout: default
title: Day 5
long_title: Putting open data into practice
link: /Day_5
category: inpractice
menu: top
weight: 6
---

On this final day, attendees are encouraged to split into groups and use the knowledge gained throughout the week and create an output to take away with them to help in future work.

This page gathers together shareable outputs from previous courses. 

## **Corruption vs Aid funding in Netherlands**

Comparing the amount of aid funding by the Netherlands to the global corruption index and population data to see if any trends exist. 

See the completed visualisation <a href="http://kode1100.com/ODI-training/">here</a>

The processed dataset is available <a href="../stuff/c_a.csv">here</a>.

The raw datasets and code that processed it is all available in <a href="../stuff/corruption.tar">this archive (tar)</a>

<br>

## **What is the case for large commercials to start publishing open data?**

Following the business day and using some of the inforgraphics tips on why yellow is a special colour. <a href="
https://docs.google.com/a/theodi.org/presentation/d/1jkaCceAsQyvPN83hk2GbukfW8ZhFVCux--ebYQEfjjk/edit#slide=id.g2ae726b8e_063">This slide deck</a> looks at the differences between government and commercial publishing of open data and how big commercials might want to start thinking about their open data journey.

<br>

## **Processing the UK Trade Info data** 

The UK Trade info data in <a href="https://www.uktradeinfo.com/Statistics/Pages/DataDownloads.aspx">raw form</a> is very hard to process due to the proprietary nature of the data. The data is plain text but the structure, while detailed and accurate, is proprietary. In order to make the data usable, <a href="../stuff/uktrade-parsing-scripts.zip">these scripts</a> writen in ruby can take the raw data and output usable csv. 

These scripts were written and tested against the data from December 2013.

## **FCO Spending Cleaning Data Vizualisation**

In stage one, OpenRefine was used to clean the FCO spending data for a couple of months, several potential errors were identified with inconsistant use of brackets. Errors were recorded in order to make a strong case for using open refine as part of the data analysis and publish process in the FCO

Stage 2 used google playground to create a motion chart showing the trend in spending in different months. A motion chart allows expediture in a time period to be animated, showing more clearly any trends.

<br>

## **Analysing the trends in Open Data Tagging**

This output took the contents of the ODI Pinboard of open data related links and looked at the tags people had used to annotate each link. Using google refine allowed the expansion of abbreviations and merging of tag groups, e.g. "opendata", "open-data" and "open data". A motion chart was then used to plot differences in tag usage over time.

<br>

## **Visualising RAF Search and Rescue data**

With the RAF Search and Rescue (S&R) being privatised, the idea here was to look at 2012 data for S&R jobs arround the UK and look at distribution and availability of services to see if the proposed privatised solution is a good one.

Stage one involved cleaning and enriching the data with geocoded locations and distances of each mission from the helicopter base. Having done this, Google fusion tables was used to plot each mission as a point, with icon corresponding to the base the helicopter originated from.

\[[Link](https://www.google.com/fusiontables/DataSource?docid=1y36seoYQD3NYlaugWFV1j1Y3zQqruReYZCiajho#map:id=3)\]
