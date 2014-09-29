---
layout: default
title: Exercise three
long_title: Exercise three
link: /Exercise-Three
category: procurement
menu: top
weight: 6
---

Working in small groups of three or four.

1. Read the scenario

2. Read the three response extracts, from three fictional suppliers, to the evaluation questions

3. Individually score the responses

4. Discuss the scores in your group reaching a group score

5. Report back your score and reasoning to the whole group & discuss

6. Review main points

## Scenario

**Managing fishing rod licence sales**

The Environment Agency requires anyone over the age of 12, who wants to fish, to have a rod licence. People can buy a fishing rod licence, online, by direct debit, by telephone or from the Post Office. People can choose what kind of licence they want (the period eg day, week, month or year). To buy a licence people need to provide their name, address and date of birth. Each licence has a unique number. The licence specifies the maximum number of rods a person can have. There are full licences and concessionary licences, for people aged 12-18, retired people, the unemployed. Licence holders can update their details, for example when they move. Licences can also be renewed. The Environment Agency sells around 1.4 million fishing rod licences each year, generating £25m in revenue. This money is used to fund the Environment Agencies fisheries work, including regulation (rod licence sales, enforcement and disease control), fisheries monitoring, promotion and advice, fish rescues and fish stocking and improvements.

The Environment Agency is procuring a contract to manage fishing rod licence sales, including managing the database of fishing rod licences.

**Requirements from exercise 1**

* Validate each rod licence holder's address against the Postcode Address File from Royal Mail

* Provide a statistical dataset about the number and type of rod licences issued in England and Wales, at entity level using the UK Register of Geographic Codes from ONS, to the Standard Level of the Open Data Certificate

* Provide a statistical dataset about the number of rod licences issued, by channel (online, direct debit, telephone, post office), the average time to process applications and data about the contractor's costs associated with licence sales for each of the channels.

**Extract of response regarding open data**

[DN: Drafting a "good" response first]

*Can you meet the requirement for publishing open data? (yes/no)*

**Yes.**

*How will you meet the practical requirements for open data around findability, accuracy, quality and guarantees?*

**Guaranteed Standard Level Open Data Certification** - we will fully meet the requirement to publish a statistical dataset for the number and type of rod licences issued in England and Wales, at entity level, using the UK Register of Geographic Codes from ONS, to the Standard Level of the Open Data Certificate. To give you complete confidence we will also seek an independent verification of the certification level we achieve.

**Findable** - we will register the data on data.gov.uk and advise you on other possible catalogue services where the data could be registered. We will identify relevant web pages on the Environment Agency website and on GOV.UK where there should be links to the data, and then liaise with the website owners to ensure those links are added, on your behalf.

**Aligning data quality to meets users needs** - during an Alpha phase we will develop our understanding of users’ needs regarding the data quality, coverage, level of detail and the frequency of updates. We will include information about the spatial and temporal coverage of the data as well as quality and update frequency in the documentation for data users.

**Improving quality and accuracy** - during the Beta phase we will identify what steps need to be taken to clean and reconcile the data, having understood data users needs in terms of quality and timeliness. We will reconcile the addresses of the licences issued against the Postal Address File from Royal Mail. We will record the steps we undertake to process and clean the data.

*How will you meet the legal requirements for open data around rights, licensing, and privacy?*

**Disclosure controls** - we will develop a method for aggregating the data that is consistent with the Government Statistical Service Code of Practice and the government’s Disclosure Control Policy. In particular we will work with you to ensure there is a robust and verified process of disclosure control checking, to make sure no personal data is inadvertently released.

**Privacy Impact Assessment** - we will work with you to conduct a Privacy Impact Assessment to make sure no potentially personally identifiable information is released. This is always a consideration, even when producing aggregate statistical data.

**Rights** - we will ensure all the rights in the data are held by the Environment Agency or, where third party sources have been used, that these are available under an open licence. We will not "pollute" your data with closed data. 

**Licensing** - we recommend that the data is published using the Open Government Licence. We will support you to decide the best wording for the attribution and include this in our user testing.

**Attribution** - we will create a web page for the rights and licensing information, including the attribution statement. This web page will contain a human readable description with a link to the Open Government Licence, and a machine readable description with a link to the Open Government Licence, using the Open Data Rights Statement Vocabulary, from the Open Data Institute.

*How will you meet the social requirements for open data around documentation, support and services?*

**Understanding the data user needs** - we will follow the Government Digital Service Design Manual principles and run, Discovery, Alpha, Beta and Live phases to implement the new service.

**Discovery** - we will understand the needs of data re-users and explore where these relate to or are different from the needs of general service users. During the discovery phase, we will publish the scope of the data to be made available alongside releasing some dummy data, so people have a flavour for what will be produced. We will map the wider data ecosystem of which this information is a part. We will engage with possible users of the data, through an online survey and interviews, to understand their uses of the data, competences and needs. We will then identify a number of user stories for the Alpha release.

**Alpha** - we will make a first release of the data (with partial coverage), with some supporting documentation and gather feedback from users. We will identify areas that can be improved, both with the data and for the documentation and supporting services. 

**Beta **- we will release all of the data and develop the publishing pipelines for maintaining the data on a regular basis. We will gather feedback for users and iteratively make improvements and refinements to how the data is published.

**Live** - we will deepen our engagement with the community we have established around the data. We will identify an appropriate hackday where we can showcase the data and encourage its use. We will video some data users talking about how they found the data and what they did with it. We will also set up the feedback mechanisms, so people can make suggestions or submit improvements to the data.

*How will you meet the technical requirements for open data around locations, formats and trust?*

**Data to bulk download and access through an API** *- *we will make the whole dataset available to download in a machine readable format, with direct download links, and also access to the data via a torrent, benefitting from peer-to-peer dissemination. As the data changes over time, we will determine with you a schedule for data releases. We will propose a consistent pattern for the URLs to the datasets to download, with a link to the current data, and links to previous data releases following a consistent pattern. We will also develop an API for access to smaller portions of the data. 

**Visualisation using the API **- we will develop a canonical view of the data. We will explore options for this user interface with data users and general users. We envisage this being a heat map, showing the density of rod licence holders across the country. Users will have the ability to click on an area of the map and to download the rod licence statistics for that area. 

**Open standard formats** - we will only use those formats which are based on industry recognised open standards. During the Alpha and Beta phases we will explore and select which formats to make the data available in. We will identify the demand for the data in general open formats, like CSV, or specialist statistical formats, such as SDMX or the Data Cube vocabulary and RDF.  

**Trust** - we will record where the data has has come from and the changes we make to the data as part of the publishing process. We will document and publish a description of our publishing processes so data users know how the data has been handled.

**URLs as identifiers** *- *based on feedback from users we will agree with you a set of URLs that we will embed in the data, as identifiers. These will dereference to web pages that will give more information about the things being identified in the data, such the different types of licence. Depending on the feedback from data users we will select what trusted third party URLs we will embed in the data.

**Third party URLs** - we will explore with data users whether we should include links to third party’s identifiers (eg those from ONS). We will assess the data against the Open Data Certificate with the aim of achieving the "Standard" level by the end of the Beta period.

[DN: Drafting a "poor" response first]

*Can you meet the requirement for publishing open data? (yes/no)*

**Yes.**

*How will you meet the practical requirements for open data around findability, accuracy, quality and guarantees?*

**Easy to find** - most people use a search engine to find the content they need. We have a wide range of experience with search engine optimisation, that can help drive relevant traffic to your website. To ensure people can find your data, we will conduct an audit of your website, assessing its ranking against a set of key search terms. Using data from Google as well as your website usage data, we will then make a series of recommendations to improve how your website is crawled and indexed. We will look to improve the site structure, ensure pages have clear titles and good meta description tags, as well a more effective anchor text for linking between pages. We will advise you on the use of robots.txt and how best to manage crawlers. 

**Quality standards** - we will handle your data according to our ISO 9001 Certified quality management process. Our established quality management systems will help improve your data quality, reduce waste, save money and boost your reputation with customers.

**Accuracy guaranteed** - we will verify every address using our exclusive, patented and market leading "*QID",* Quality In Data, product. You will benefit from our quality assured database, containing accurate locale data. With your data converted to QID audited data, not only will you benefit from enhanced data quality, we will also promote your data amongst our open community of QID data users. For your open data offering, we can also advise how best to manage any liabilities for errors in your data, with an appropriate disclaimer.

*How will you meet the legal requirements for open data around rights, licensing, and privacy?*

**Protecting privacy **- we will use a process of pseudonymisation to ensure personal data is not released. We will strip the rod licence data of all the identifiers before publication, and in their place substitute meaningless pseudonymns, retaining the capability for this data to linked and analysed with other data sets. All names and addresses will be stripped in the pseudonymised data. It will be possible for the Environment Agency, if you wish, to disclose the names and addresses to approved analysts for approved purposes.

**Freeing the data** - to promote re-use and encourage innovation we will make the pseudonymised data available free of charge, under a variety of transparent, flexible and simple licence terms and conditions. We recommend the use of a free developer licence, especially designed to encourage small start-ups seeking to exploit government data. We will also offer a pay-for "commercial" licence, for business users, complete with a Service Level Agreement that will include a tailored package of support for users of the data.

*How will you meet the social requirements for open data around documentation, support and services?*

**Personas that encapsulate users’ needs** - the user is at the centre of all of our work. We will dedicate an entire phase of the project to understanding users needs. We will begin by exploring the service landscape and understanding the different user types. We will develop a series of so called user personas, which will detail specific user challenges, issues, objectives and needs. The understanding we develop during this phase will help us explore other aspects of the Environment Agency’s user landscape, such as the various touchpoints in use today, and possible future touchpoints. We will use this analysis to provide further insights, for example potential opportunities for the Environment Agency to innovate with this data and deliver a compelling new rod licensing service. By identifying fundamental needs that people have within the service landscape, our aim is to define a credible solution.

**A wiki to support users** - we will set-up and host a wiki, a place where users of the data can document what they find when exploring the data, helping and supporting each other as part of an open community of practice of data users. We envisage the wiki, which will be user led, covering all aspects of the data and its use. For business users of the data, where the expectations are for a commercial level of support, we will also offer tailored packages, of documentation, email and telephone support, as part of our individual Service Level Agreements.

*How will you meet the technical requirements for open data around locations, formats and trust?*

**Machine readable data with API access** - we will provide API access to all the data in a machine readable form. We will use the JSON format, as a modern approach to publishing data. One of the benefits of using JSON is that it is the best format for loading the data into a web browser, for example using an "in memory" browser database. This approach greatly aids the creation of smooth, high quality, data visualisations. By asking data users to register for an “API Key”, we will ensure the API is responsive, as well as being able to monitor its usage. We will use API usage data to produce high quality analytics about the service, so that it can be improved and refined. 

**High quality identifiers** - we will embed our "*QID"* identifiers in the data, as a trusted source of identifiers for locations and locales. This means the data can be connected and linked with other data sources quickly and easily.


