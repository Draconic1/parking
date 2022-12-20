1. дропнуть бд в воркбенче  
  DROP DATABASE parking;  
  
2. создать БД в воркбенче (да такие приколы)  
  CREATE DATABASE parking;  
  GRANT ALL PRIVILEGES ON parking.* TO polina@'localhost';  

3. перенос проекта:  
  git checkout dz;  

4. cd backend;  
   npm start  
   добавить данные в воркбенче из файла polina.sql  
 
5. после первого запуска бэка в файле server.js (бэк)  изменить строки:  
  30 строка: .sync({ force: true}) изменить на  .sync({ })    (убрать force: true)  
  удалить 33 строку  initial();   
  иначе БД будет каждый раз пересоздаваться  
  
6. запустить фронтенд и вроде все  
