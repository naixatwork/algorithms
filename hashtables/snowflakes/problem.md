### The Problem
We’re given a collection of snowflakes, and we have to determine whether
any of the snowflakes in the collection are identical.
A snowflake is represented by six integers, where each integer gives the
length of one of the snowflake’s arms. For example, this is a snowflake:
3, 9, 15, 2, 1, 10
Snowflakes can also have repeated integers, such as
8, 4, 8, 9, 2, 8
What does it mean for two snowflakes to be identical? Let’s work up to
that definition through a few examples.
First we’ll look at these two snowflakes:
1, 2, 3, 4, 5, 6
and
1, 2, 3, 4, 5, 6
These are clearly identical because the integers in one snowflake match
the integers in their corresponding positions in the other snowflake.
Here’s our second example:
1, 2, 3, 4, 5, 6
and
4, 5, 6, 1, 2, 3
These are also identical. We can see this by starting at the 1 in the sec-
ond snowflake and moving right. We see the integers 1, 2, and 3 and then,
wrapping around to the left, we see 4, 5, and 6. These two pieces together
give us the first snowflake.
We can think of each snowflake as a circle. These two snowflakes are
identical because we can choose a starting point for the second snowflake
and follow it to the right to get the first snowflake.
Let’s try a trickier example:
1, 2, 3, 4, 5, 6
and
3, 2, 1, 6, 5, 4
From what we’ve seen so far, we would deduce that these are not identi-
cal. If we start with the 1 in the second snowflake and move right (wrapping
around to the left when we hit the right end), we get 1, 6, 5, 4, 3, 2. That’s
not even close to the 1, 2, 3, 4, 5, 6 in the first snowflake.
However, if we begin at the 1 in the second snowflake and move left in-
stead of right, then we do get exactly 1, 2, 3, 4, 5, 6! Moving left from the 1
gives us 1, 2, 3, and wrapping around to the right, we can proceed leftward
to collect 4, 5, 6.
That’s our third way for two snowflakes to be identical: two snowflakes
are called identical if they match when we move leftward through the
numbers.
Putting it all together, we can conclude that two snowflakes are identi-
cal if they are the same, if we can make them the same by moving rightward
through one of the snowflakes, or if we can make them the same by moving
leftward through one of the snowflakes.
###Input
The first line of input is an integer n, which gives the number of snowflakes
that we’ll be processing. The value n will be between 1 and 100,000. Each
of the following n lines represents one snowflake: each line has six integers,
where each integer is at least zero and at most 10,000,000.
###Output
Our output will be a single line of text:
•
 If there are no identical snowflakes, print exactly
No two snowflakes are alike.
•
 If there are at least two identical snowflakes, print exactly
Twin snowflakes found.
The time limit for solving the test cases is two seconds.
