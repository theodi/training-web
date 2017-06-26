---
layout: default
title: Home
category: tools
long_title: Key tools for working with tabular data
link: /Tools/
weight: 1
---
On this page you will find links to many tools and exercises that can help you process tabular data available openly on the web.

## Tools

### [PDF Tables](https://pdftables.com/)

Accurately convert PDF tables to Excel with a simple drag and drop tool.

### [import.io](https://import.io/)

Automatically extract data from websites quickly and easily.

### [CSV Lint](http://csvlint.io)

A tool to validate individual CSV files. This tool looks for both technical errors hidden in the file as well as basic errors in the data. It can also validate a file against a defined schema.

### [CSV Dataset Health Check](http://theodi.github.io/csv-dataset-validator/)

Looks at the health of an entire dataset of CSV files hosted in the CKAN platform (e.g. data.gov.uk and many other open data instances). The health check looks for availability of data and ability to reconstruct a single dataset from a series of CSV files (e.g. monthly spending). It looks for variations in column titles, file names and lengths and enables you to get to grips with the challenges of using an entire dataset. The tool will also validate each individual file using CSVLint, saving you the job of doing each one individually.

### [Google/Open Refine](http://openrefine.org/download/)

A power tool for dealing with messy data. One of the <b>most essential</b> tools for any data project. 

See the <a href="#valid">Validating and Cleaning data</a> exercise to help you get started using the tool. 

<iframe width="560" height="315" src="//www.youtube.com/embed/B70J_H_zAWM" frameborder="0" allowfullscreen="true">&nbsp;</iframe>

### [Dataseedapp](https://dataseedapp.com)

A fast way to create interactive dashboards from tabular data.

### [dc.js](https://dc-js.github.io/dc.js/)

Dimensional charting javascript library with native crossfilter support, allowing highly efficient exploration on large multi-dimensional datasets. 

See the <a href="#complex">Creating a crossfilter</a> exercise to help you get started using the tool.

## Exercises

### Discovering data

This \[[exercise](/resources/Discovering_Open_Data_Exercise.pdf)\] looks at publishing practices on the web and asks a few supposedly simple questions. There are two main datasets needed for this exercise. 

*Dataset 1*: [Spend over £25,000 in the Foreign and Commonwealth Office](http://data.gov.uk/dataset/financial-transactions-data-fco
)

*Dataset 2*: [Land Registry Monthly Property Transaction Data](http://data.gov.uk/dataset/monthly-land-registry-property-transaction-data)

<div id="valid"></div>

### Data Cleaning and Validation 

This \[[exercise](/resources/Cleaning_Exercise.pdf)\] introduces Open Refine as a tool for cleaning dirty data. 

The following datasets are required for this exercise:

*Dataset 1*: Louisiana Secretary of State Officials \[[Source](http://www.sos.la.gov/tabid/136/default.aspx)\] \[[Download](/resources/dataset1.xls)\] 
 
*Dataset 2*: Projects Dataset \[[Source](https://www.itdashboard.gov/data_feeds)\] \[[Download](/resources/dataset2.csv)\] 
 
*Dataset 3*: UK GP Earnings \[[Source](http://data.gov.uk/dataset/gp-earnings-and-expenses-2009-10)\] \[[Download](/resources/dataset3.csv)\] 

<div id="complex"></div>

### Creating a crossfilter

This \[[exercise](/resources/ExploringComplexDatasetsRapex.pdf\] introduces the dc.js library and demonstrates how to create an interactive online dashboard for the [European Rapid Alerts System](http://ec.europa.eu/consumers/consumers_safety/safety_products/rapex/alerts/) data. 