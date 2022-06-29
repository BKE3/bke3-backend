-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS birds;

CREATE TABLE birds (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    latin_name TEXT NOT NULL,
    common_name TEXT NOT NULL,
    habitat TEXT NOT NULL,
    life_expectancy TEXT NOT NULL,
    flightless BOOLEAN DEFAULT TRUE,
    image_url TEXT NOT NULL
);

INSERT INTO birds (
    latin_name,
    common_name,
    habitat,
    life_expectancy,
    flightless,
    image_url
)
VALUES
('Cyanocitta','Blue Jay', 'Oak and pin woods, suburban gardens, groves, towns.', '7 years', false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Blue_jay_in_PP_%2830960%29.jpg/440px-Blue_jay_in_PP_%2830960%29.jpg'),
('Strigiformes', 'Owl', 'coniferous forests, mountains, deserts, and plains', '5-12 years in the wild', false, 'https://cdn.britannica.com/86/34386-050-25B31B35/Great-horned-owl.jpg'),
('Oxyura jamaicensis','Ruddy Duck', 'Fresh marshes, ponds, lakes; in winter, salt bays.', '13 years', true, 'https://www.allaboutbirds.org/guide/assets/photo/302124271-480px.jpg
')