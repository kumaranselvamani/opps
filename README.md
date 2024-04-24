# Class Movie:

1. The Movie class has a constructor that takes three parameters: title, studio, and an optional rating (defaulting to "PG" if not provided).
2. Inside the constructor, the properties title, studio, and rating are assigned based on the input values.
3. Static Method getPG:
The getPG method is a static method .
It takes an array of movies as an argument.
It filters the movies in the array, returning only those with a rating of "PG".
4. The getPG method is called on the Movie class, filtering the movies to get only those with a rating of “PG” or “PG-13”.
The filtered movies are logged to the console.


# Circle class

1. The Circle class has two properties: radius and color.
The constructor initializes these properties with the provided values.
There are getter methods (getRadius() and getColor()) to retrieve the values of radius and color.
Setter methods (setRadius(radius) and setColor(color)) allow updating the values of radius and color.
2. toString(): Returns a string representation of the circle, including its radius and color.
getArea(): Calculates and returns the area of the circle using the formula: area = π * radius^2.
getCircumference(): Computes and returns the circumference of the circle using: circumference = 2 * π * radius.
3. An instance of the Circle class is created with a radius of 1.0 and color "red".
We log the circle details (using toString()), area, and circumference.


# person class

1. The Person class has three properties: name, age, and gender.
The constructor initializes these properties with the provided values.
There are getter methods (getName(), getAge(), and getGender()) to retrieve the values of these properties.
Setter methods (setName(name), setAge(age), and setGender(gender)) allow updating the values.
2. The toString() method returns a string representation of the person, including their name, age, and gender.
3. An instance of the Person class is created with the name “kumaran”, age 30, and gender “male”.
We log the person’s details (using toString()).
The age is then changed to 28, and the updated details are logged.

# uberPrice class

1. The UberPriceCalculator class has two properties: baseFare and costPerKm.
The constructor initializes these properties with the provided values.
The calculatePrice(distanceInKm) method calculates the total price for an Uber ride based on the distance traveled.
2. An instance of the UberPriceCalculator class is created with a base fare of 50 and a cost of 10 per kilometer.
We calculate the price for a 5 km Uber ride using the calculatePrice() method.
The result is logged to the console.
