CREATE TABLE User(
    ID integer PRIMARY KEY,
    username varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    cc integer
);

CREATE TABLE Recipe(
    ID integer PRIMARY KEY,
    UserID integer REFERENCES User(ID),
    Recipe_description varchar(100),
    imgPath varchar(50),
    timecreated varchar(50)
);

CREATE TABLE Suggestion(
    ID Integer PRIMARY KEY,
    InstructionID integer REFERENCES Instruction(ID),
    UserID integer REFERENCES User(ID),
    textbox varchar (50),
    vote_count integer,
    timecreated varchar(50)
) 

CREATE TABLE Instruction(
    RecipeID integer REFERENCES Recipe(ID)
    textbox varchar(100),
    order integer
)

CREATE TABLE Tag(
    RecipeID integer REFERENCES Recipe(ID),
    textbox varchar(100)
)

CREATE TABLE Ingredient(
    RecipeID integer REFERENCES Recipe(ID)
    textbox varchar(100)
)

CREATE TABLE Vote(
    SuggestionID integer REFERENCES Suggestion(ID),
    UserID integer REFERENCES User(ID),
    UpOrDown boolean
)

GRANT SELECT ON User TO PUBLIC;
GRANT SELECT ON Recipe TO PUBLIC;
GRANT SELECT ON Suggestion TO PUBLIC;
GRANT SELECT ON Instruction TO PUBLIC;
GRANT SELECT ON Tag TO PUBLIC;
GRANT SELECT ON Ingredient TO PUBLIC;
GRANT SELECT ON Vote TO PUBLIC;
