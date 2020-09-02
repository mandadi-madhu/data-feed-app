Assumptions:
------------
1.yield.csv

In the given Excel document there is a sheet "yield". 
I assumed the top 2 rows in that sheet are example CSV line for 'yield.csv'.
But the number of field names were not matching to the number of values. 
There are 10 values for maturity, and 10 values for 'data values'. So I added extra field names like 'maturity1....maturity10,, and similarly 'value1...vlue10'.

Also given example doesn't have the fields "interpType"& "extraptype" instead there are "Days per Annum & Mean Reversion Rate". So I replaced these 2 field names with "interpType"& "extraptype".