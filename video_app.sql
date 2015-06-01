drop table videos;
CREATE TABLE videos(
  id serial8 primary key, 
  title varchar(225),
  description text,
  url varchar(225),
  genre varchar(30)
); 


INSERT INTO videos (title, description, url, genre)
  VALUES ('Do What You Want', 'Official video', 'i00GDT9FuFM',  'Pop/Rock');

INSERT INTO videos (title, description, url, genre)
  VALUES ('this is the fact!', 'Official video', 'V2fpgpanZAw',  'Pop');

  INSERT INTO videos (title, description, url, genre)
  VALUES ('What to do ', 'Official video', 'https://www.youtube.com/embed/QB_9L1qBhug" frameborder="0" allowfullscreen',  'Pop/Rock');

INSERT INTO videos (title, description, url, genre)
  VALUES ('Hit me one more time!', 'Official video', 'V2fpgpanZAw',  'Rock');