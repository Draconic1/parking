1. создать пользователя бд    
  имя polina
  пароль 1234    
  localhost  
  authentication type: Standard !!!!

2. создать БД в воркбенче  
  CREATE DATABASE parking;  
  GRANT ALL PRIVILEGES ON parking.* TO polina@'localhost';  

3. перенос проекта:  
  git init  
  git clone https://github.com/Draconic1/polinalab.git  
  npm i  

4. запустить бэк  
  запустить в воркбенче polina.sql  
 
5. после первого запуска бэка в файле server.js (бэк)  изменить строки:  
  30 строка: .sync({ force: true}) изменить на  .sync({ })    (убрать force: true)  
  удалить 33 строку  initial();   
  иначе БД будет каждый раз пересоздаваться

______________________________
Для запуска проекта надо открыть 2 терминала, один в папке фронтенд, другой в папке бэкенд   
там запустить npm start  

1. админка на бэке  
  npm run mysql-admin  
  http://127.0.0.1:8082/  
  admin  
  QQqq11

2. пользователь админ на фронтенде:  
  http://localhost:3000/  
  лог: admin  
  пароль: admin  
