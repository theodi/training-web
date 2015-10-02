# Using R to explore data

In this exercise we use R and R-Studio to explore a dataset and build a classification model.

To begin, create a free account at [https://www.datacamp.com/](https://www.datacamp.com/).

Once done navigate to [https://www.datacamp.com/rstudio/](https://www.datacamp.com/rstudio/)

## The sections of R Studio

Top right - Your environment, here will be listed datasets and variables you create or load.

Bottom right - Outputs and explorer, here will be plots, results and other outputs from functions you call.

Bottom left - The console, where you type commands. 

## Step 1 - Load some data

From the environment panel (top right) click import dataset and select the "from URL" option.

When prompted enter the URL of our houses dataset [http://training.theodi.org/StatsML/data/training-data.csv](http://training.theodi.org/StatsML/data/training-data.csv)

Make sure you name this "houses" and NOT "training-data"

Once loaded enter the following in the console to default to using this dataset:

  attach(houses)
  
This step saves a lot of typing the word houses later.

## Step 2 - Explore the data

Enter the following in the console to start exploring the data

  str(houses)
  
This will display the structure of the dataset.

To find out more about any command type a ? in front of it, for example why not try:

  ?str
  
We can quickly find out some summary stats using the summary command:

  summary(houses)
  
This will give us numical or text summaries of each column based upon the structure. 

## Step 3 - Plots and simple graphics

One nice built in function of R is the plot function. This function will try and plot whatever data it can and display it for you.

Try it on this dataset:

  plot(houses)
  
You will notice this draws a matrix of plots between each numical factor. It is hard to see but some patterns might stand out.

Let's zoom in on one pair of variables by defining these as the x and y axis of our plot

  plot(x=price_per_sqft,y=elevation)
  
There are two distinct groups of values in the horizontal and vertical planes. These are probably the different cities of San Francisco and Ney York in the data. We can change the plot to colour the points based upon this separation.

  plot(x=price_per_sqft,y=elevation,col=target)

Note that the colour at index 0 (target 0) is white, this doesn't show up. To change this we can just add 1 to the target (as it is numeric). This will mean that colours 1 and 2 (rather than 0 and 1) will be used from R's colour palette.

  plot(x=price_per_sqft,y=elevation,col=target+1)

Moving away from the simple plot, R has many other types of plot that can be used to analyse the data, like a box and whiskers plot.

  boxplot(formula = beds ~ target, data=houses)

In this formula we are looking a number of beds and grouping them by the target into two columns. We can clearly see the difference between each city.

Finally why not try a histogram on some of the data

  hist(elevation)

## Step 3 - Classification tree improvement

Use the plot functions to improve or change your classification tree that you have already built.

## Step 4 - Building classification trees in R

R has lots of useful machine learning and statistical libraries we can use to automatically generate complex models for us. In this section we are going to use rpart (Recursive Partitioning and Regression Trees) to build a classification tree.

First we need to load the library.

  library(rpart)
  
Next we use this function to start building and testing a classification tree.

  rpart(formula = target ~ elevation+ price_per_sqft, data=houses, method="class")

Here we have defined the formula to learn based upon the target and use elevation and price_per_sqft as key factors (80% and 60% weighting respectively). This is then applied to the houses dataset using the classification method. The output will tell use the decisions made at each point and how many items were classified into each. 

It has to be said it is not very clear in this form, so lets plot it. 

First we need to assign the result of rpart to a variable we can plot.

  fit <- rpart(formula = target ~ elevation+ price_per_sqft, data=houses, method="class")
  
Now we can plot this on a decision tree chart. Luckily R knows how to do hierachies with the built in plot function.

  plot(fit, uniform=TRUE, main="Classification tree for houses")
  
Here we plot our fit variable and use a Uniform distribution to show splits in the tree at the right levels and give the plot a title (main) of "Classification tree for houses". 

This is our classification tree, but it doesn't mean much without accompanying text, so lets add some.

  text(fit, use.n=TRUE, all=TRUE, cex=.8)
  
This is a bit better, but from the numbers on each branch we can see this classification does not accurately classify our houses into the two cities, we are looking for single numbers or numbers like 10/0 to show we have distinct classification. 

Why not try changing the rpart formula to add more factors (separated by a + sign) to the formula. You can also re-order them based upon your own knowledge of a good classification tree for this dataset. 

Note also that you can apply str and summary to the fit variable to get more information.

# Learn more

DataCamp has many more lessons on R, why not enrol for some of it's courses. 
