CREATE TABLE IF NOT EXISTS myTable (
      name INTEGER PRIMARY KEY,
      age INTEGER,
      email TEXT
      
    );

    INSERT INTO myTable (name, age, email) VALUES ('정진혁', 'jjh@naver.com', 25);
    INSERT INTO myTable (name, age, email) VALUES ('구민회', 'kmh@example.com', 25);
    INSERT INTO myTable (name, age, email) VALUES ('김동연', 'kdy@example.com', 25);
    INSERT INTO myTable (name, age, email) VALUES ('정회창', 'jhc@example.com', 25);
    

    /* 
    ["정진혁", "25", "jjh@naver.com"],
  ["구민회", "25", "kmh@example.com"],
  ["김동연", "25", "kdy@example.com"],
  ["정회창", "25", "jhc@example.com"],
  
    */