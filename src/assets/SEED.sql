--SQl Database Schema

--Drop previous versions of the tables if they exist
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Recipe;
DROP TABLE IF EXISTS Suggestion;
DROP TABLE IF EXISTS Instruction;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS Ingredient;
DROP TABLE IF EXISTS Vote;
DROP TABLE IF EXISTS Rating;

CREATE TABLE Users(
    ID integer PRIMARY KEY,
    username varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    cc integer
);

CREATE TABLE Recipe(
    ID integer PRIMARY KEY,
    UserID integer REFERENCES Users(ID),
    Recipe_name varchar(50),
    Recipe_description varchar(200),
    imgPath varchar(50),
    timecreated timestamp
);

CREATE TABLE Instruction(
    ID integer PRIMARY KEY,
    RecipeID integer REFERENCES Recipe(ID),
    textbox varchar(1000),
    ordering integer
);

CREATE TABLE Suggestion(
    ID integer PRIMARY KEY,
    InstructionID integer REFERENCES Instruction(ID),
    UserID integer REFERENCES Users(ID),
    textbox varchar (200),
    vote_count integer,
    timecreated timestamp
); 

CREATE TABLE Tag(
    ID integer PRIMARY KEY,
    RecipeID integer REFERENCES Recipe(ID),
    textbox varchar(100)
);

CREATE TABLE Ingredient(
    ID integer PRIMARY KEY,
    RecipeID integer REFERENCES Recipe(ID),
    textbox varchar(100)
);

CREATE TABLE Vote(
    SuggestionID integer REFERENCES Suggestion(ID),
    UserID integer REFERENCES Users(ID),
    UpOrDown boolean
);

CREATE TABLE Rating(
    ID integer PRIMARY KEY,
    RecipeID integer REFERENCES Recipe(ID),
    stars integer,
    review_text varchar(1000),
    UserID integer REFERENCES Users(ID)
);

GRANT SELECT ON Users TO PUBLIC;
GRANT SELECT ON Recipe TO PUBLIC;
GRANT SELECT ON Suggestion TO PUBLIC;
GRANT SELECT ON Instruction TO PUBLIC;
GRANT SELECT ON Tag TO PUBLIC;
GRANT SELECT ON Ingredient TO PUBLIC;
GRANT SELECT ON Vote TO PUBLIC;
GRANT SELECT ON Rating TO PUBLIC;

--Add Sample Data

INSERT INTO Users VALUES (1, 'cjl39', '2474477', 100);
INSERT INTO Users VALUES (2, 'jjw36', '2521133', 1);
INSERT INTO Users VALUES (3, 'irl24', '2474663', 100);

INSERT INTO Recipe VALUES (1, 1, 'Deconstucted Chicken Pot Pie', 'A savory and filling deconstucted chicken pot pie recipe. Serves 3 or 4. Takes about 25 minutes', 'chicken_pot_pie.jpg', '2019-10-30 08:00:00');
INSERT INTO Recipe VALUES (2, 1, 'Instant Ramen for Adults', "You really can't mess this one up. Serves 1 or 2, takes 8 minutes to make.", 'Instant Ramen.jpg', '2019-10-29 13:20:00');

INSERT INTO Instruction VALUES(1, 1, '1) Melt 1 tablespoon of the butter in a medium skillet over medium heat Season the chicken with salt and pepper. When the butter has melted, add the chicken and cook, stirring until browned all over, about 2 minutes. Transfer the chicken to a plate.', 1);
INSERT INTO Instruction VALUES(2, 1, '2) Melt the remaining 2 tablespoons of butter in the skillet. Add the mushrooms and scallion whites and cook until the mushrooms soften, 3 to 4 minutes. Sprinkle the thyme and flour over the vegetables and stir to coat. Cook for 1 minute to toast the flour a bit, then stir in the broth and cream. Bring to a simmer and add the peas and carrots.', 2);
INSERT INTO Instruction VALUES(3, 1, '3) Return the chicken and any juices from the plate to the skillet. Simmer until the peas and carrots are heated through and the chicken is fully cooked, about 3 minutes. Add the scallion greens and simmer for 1 minute to wilt them slightly. Finish with a squeeze of lemon juice. Serve with biscuits on top or on the side.', 3);
INSERT INTO Instruction VALUES(4, 2, '1) Bring 2 cups of water to a boil in a small pot over high heat. Reduce the heat to medium and add the ramen noodles, frozen veggies, turmeric, 1/2 teaspoon of the ramen seasoning, and 1/2 teaspoon salt; stir to combine. Return the water to a boil and cook until the veggies are crisp-tender with some bite, about 3 minutes.', 1);
INSERT INTO Instruction VALUES(5, 2, '2) Add the chicken and cook until just warmed through, about 1 minute. Remove from the heat and ladle the vegetables, chicken, and noodles into a bowl. Pour the broth over the top and serve.', 2);

INSERT INTO Suggestion VALUES(1, 1, 3, 'To add extra flavor to the chicken, season with basil to taste.', 20, '2019-11-01 13:20:00');
INSERT INTO Suggestion VALUES(2, 4, 3, 'Add an additional 1/2 teaspoon of ramen seasoning for a more unhealthy take on this classic dish.', 132, '2019-11-01 15:22:00');

INSERT INTO Tag VALUES(1, 1, 'Oven');
INSERT INTO Tag VALUES(2, 2, 'Stove');

INSERT INTO Ingredient VALUES(1, 1, '3 tablespoons unsalted butter');
INSERT INTO Ingredient VALUES(2, 1, '2 boneless, skinless chicken breasts (about 1 1/4 pounds), cut into 1-inch chunks');
INSERT INTO Ingredient VALUES(3, 1, 'Kosher salt and freshly ground black pepper');
INSERT INTO Ingredient VALUES(4, 1, '8 medium white or cremini mushrooms (about 6 ounces), thickly sliced');
INSERT INTO Ingredient VALUES(5, 1, '1 bunch scallions, chopped, white and green parts kept separate');
INSERT INTO Ingredient VALUES(6, 1, '1 tablespoon chopped freah thyme leaves, or 1/2 teaspoon dried');
INSERT INTO Ingredient VALUES(7, 1, '3 tablespoons all-purpose flour');
INSERT INTO Ingredient VALUES(8, 1, '3/4 cup chicken broth');
INSERT INTO Ingredient VALUES(9, 1, '1/2 cup heavy cream of half-and-half');
INSERT INTO Ingredient VALUES(10, 1, '1 cup frozen peas and carrots');
INSERT INTO Ingredient VALUES(11, 1, '1 lemon wedge');
INSERT INTO Ingredient VALUES(12, 1, 'Biscuits, for serving');
INSERT INTO Ingredient VALUES(13, 2, '1 (3-ounce) package instant ramen (any flavor), seasoning packet reserved');
INSERT INTO Ingredient VALUES(14, 2, '1 cup mixed fozen vegetables');
INSERT INTO Ingredient VALUES(15, 2, '1 teaspoon ground turmeric');
INSERT INTO Ingredient VALUES(16, 2, '1/2 teaspoon Kosher salt');
INSERT INTO Ingredient VALUES(17, 2, '1 cup sliced cooked chicken breast');

INSERT INTO Vote VALUES(1, 1, TRUE);
INSERT INTO Vote VALUES(2, 1, FALSE);

INSERT INTO Rating VALUES(1, 1, 5, 'So tasty and healthy! I loved it!', 3);
INSERT INTO Rating VALUES(2, 2, 4, "Decent college food for when you don't have time for dinner", 2);


