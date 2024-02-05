-- create 2009 table

CREATE TABLE "2009_Data" (
    "City" VARCHAR(30)   NOT NULL,
    "2009_Population" int   NOT NULL,
    "2009_Violent_crime" int   NOT NULL,
    "2009_Murder_and_nonnegligent_manslaughter" int   NOT NULL,
    "2009_Rape" int   NOT NULL,
    "2009_Robbery" int   NOT NULL,
    "2009_Aggravated_assault" int   NOT NULL,
    "2009_Property_crime" int   NOT NULL,
    "2009_Burglary" int   NOT NULL,
    "2009_Larceny_theft" int   NOT NULL,
    "2009_Motor_vehicle_theft" int   NOT NULL,
    "2009_Arson" int   NOT NULL,
    CONSTRAINT "pk_2009_Data" PRIMARY KEY (
        "City"
     )
);

-- create 2019 table

CREATE TABLE "2019_Data" (
    "City" VARCHAR(30)   NOT NULL,
    "2019_Population" int   NOT NULL,
    "2019_Violent_crime" int   NOT NULL,
    "2019_Murder_and_nonnegligent_manslaughter" int   NOT NULL,
    "2019_Rape" int   NOT NULL,
    "2019_Robbery" int   NOT NULL,
    "2019_Aggravated_assault" int   NOT NULL,
    "2019_Property_crime" int   NOT NULL,
    "2019_Burglary" int   NOT NULL,
    "2019_Larceny_theft" int   NOT NULL,
    "2019_Motor_vehicle_theft" int   NOT NULL,
    "2019_Arson" int   NOT NULL,
    CONSTRAINT "pk_2019_Data" PRIMARY KEY (
        "City"
     )
);

SELECT * FROM "2019_Data"
