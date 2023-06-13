/*
SAL'S SHIPPING

Sal runs the biggest shipping company in the tri-county area, Sal’s Shippers. Sal wants to make sure that every single one 
of his customers has the best, and most affordable experience shipping their packages.

In this project, you’ll build a program that will take the weight of a package and determine the cheapest way to ship that 
package using Sal’s Shippers.

Sal’s Shippers has several different options for a customer to ship their package:
    - Ground Shipping, which is a small flat charge plus a rate based on the weight of your package.
    - Ground Shipping Premium, which is a much higher flat charge, but you aren’t charged for weight.
    - Drone Shipping (new), which has no flat charge, but the rate based on weight is triple the rate of ground shipping.

Here are the prices:
    Ground Shipping
            - Weight of Package:                        | Prices per Pound: | Flat Charge
            - 2lbs or less                              | $1.50             | $20
            - over 2lbs but less than or equal to 6lbs  | $3.00             | $20
            - over 6lbs but less than or equal to 10lbs | $4.00             | $20
            - over 10lbs                                | $4.75             | $20

    Ground Shipping Premium
        - Flat Charge: $125.00
    
    Drone Shipping
        - Weight of Package:                        | Prices per Pound: | Flat Charge
            - 2lbs or less                              | $4.50             | $0
            - over 2lbs but less than or equal to 6lbs  | $9.00             | $0
            - over 6lbs but less than or equal to 10lbs | $12.00            | $0
            - over 10lbs                                | $14.25            | $0

Write a shipping.py Python program that asks the user for the weight of their package and then tells them which method of 
shipping is cheapest and how much it will cost to ship their package using Sal’s Shippers.

*/

/*
PART 1: GROUND SHIPPING

1. First things first, define a weight variable and set it equal to any number.

2. Next, we need to know how much it costs to ship a package of given weight by normal ground shipping based on the “Ground shipping” table above.
   Write a comment that says “Ground Shipping”.
   Create an if/elif/else statement for the cost of ground shipping. It should check for weight, and print the cost of shipping a package of that weight.

3. A package that weighs 8.4 pounds should cost $53.60 to ship with normal ground shipping:
                8.4 lb x $4.00 + $20.00 = $53.60
   Test that your ground shipping calculation gets the same value
*/

/*
PART 2: GROUNS SHIPPING PREMIUM

4. We’ll also need to make sure we include the price of premium ground shipping in our code.
   Create a variable for the cost of premium ground shipping.
   Note: This does not need to be an if statement because the price of premium ground shipping does not change with the weight of the package.

5. Print it out for the user just in case they forgot!
*/

/*
PART 3: DRONE SHIPPING

6. Write a comment for this section of the code, “Drone Shipping”.
   Create an if/elif/else statement for the cost of drone shipping. This statement should check against weight and print the cost of shipping a package of that weight.

7. A package that weighs 1.5 pounds should cost $6.75 to ship by drone:
                1.5 lb × $4.50 + $0.00 = $6.75
   Test that your drone shipping calculation gets the same value.
*/

/*
SOLUTION:
Great job! Now, test everything one more time!

What is the cheapest method of shipping a 4.8 pound package and how much would it cost?

What is the cheapest method of shipping a 41.5 pound package and how much would it cost?
*/


/*
HINTS

Q1. It should look something like: 
        weight = 80
    This will be the variable that you will check against in you if statements

Q2. Your if statement should take a form similar to:
        if weight <= 2:
            cost_ground = weight * 1.5 + 20
        elif weight [SOME INEQUALITY]:
            # more calculation
        elif weight [SOME INEQUALITY]:
            # more calculation
        else:
            # last calculation
Q2. It's helpful to periodically test the output of your calculations using print statements.
    Suppose your calculation is stored in a cost_ground variable:
        print(cost_ground)

Q4. The Ground Shipping Premium has a flat fee of $125.00:
        cost_ground_premium = 125.00

Q5. It should look something like:
        cost_ground_premium = 125.00
    print("Ground Shipping Premium $", cost_ground_premium)

Q6. This if statement should look very similar to the if statement you wrote for ground shipping. You can even copy 
    the syntax directly and just change the numbers!

Q7. For 4.8 pounds, ground shipping is the cheapest:
        Ground Shipping $ 34.4
        Ground Shipping Premium $ 125.0
        Drone Shipping: $ 43.199999999999996
    For 41.5 pounds, ground shipping premium is the cheapest:
        Ground Shipping $ 217.125
        Ground Shipping Premium $ 125.0
        Drone Shipping: $ 591.375
*/