CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);


-- Generated using init.py. password is simply X2345678 where X is the index
INSERT INTO Users (id, email, password) VALUES (0, 'user0@gmail.com', '$2b$12$BdzlObGGyGwptVga/Y2k1ujkY1Ri/hCojSdCH5xuFEBz6DRW07lCW');
INSERT INTO Users (id, email, password) VALUES (1, 'user1@gmail.com', '$2b$12$ebmRQn5wSt7MnvtXQwdKIO33KJcbQj9H4nMczJ222cGBzdknfxV8m');
INSERT INTO Users (id, email, password) VALUES (2, 'user2@gmail.com', '$2b$12$yl/yosrw.mXiBjZEld3JMeP4wihBRCxT/AZo/V3oGgIwTBnHMdrvK');
INSERT INTO Users (id, email, password) VALUES (3, 'user3@gmail.com', '$2b$12$4fFZG.aHIYV5jjle7nw/6eEbElsFM9WslK6j3PRsaCIVR9kdG1XSW');
INSERT INTO Users (id, email, password) VALUES (4, 'user4@gmail.com', '$2b$12$A6GeJTFM4JDCPo.j/49opel4lWRKSTSFsfD44vkCrLsiIZc53iQbS');
INSERT INTO Users (id, email, password) VALUES (5, 'user5@gmail.com', '$2b$12$FbCfA3nY7FlvKHBOkPi1BuxPNXkIflEqwtrC4/3ArYn60HL5CZTwy');
INSERT INTO Users (id, email, password) VALUES (6, 'user6@gmail.com', '$2b$12$7qDUu8C3P2NMheB2HKXCu.kVTvRQAxaC8AzTnO0UJrwZ6XvDFuT02');
INSERT INTO Users (id, email, password) VALUES (7, 'user7@gmail.com', '$2b$12$Y1ICflrjYEkWOu4KQP48/.VurtKvlXSZ1SpevfR3/J./dYF2gWQJ.');
INSERT INTO Users (id, email, password) VALUES (8, 'user8@gmail.com', '$2b$12$TY8KxyJyYztFY/m6DGFp2e6NTomc/UZ3CBbvW1Y4hO0TjI8ur/HJW');
INSERT INTO Users (id, email, password) VALUES (9, 'user9@gmail.com', '$2b$12$dCL4xj2uaNDIx3gW6U5P9.rMM2c9PCAR1UKdJWC7uqV2xO4BhrnpG');