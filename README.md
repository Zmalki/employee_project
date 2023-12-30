#  clone project 
* containing both backend and frontend
 #  backend
##  install sql server
* install sql server experss
[link for  install sql server experss 2022  on Windows](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
 # visual studio 2022
 *  install visual studio 2022
 * select Web development and ASP.NET
 * open backend folder (WorkerAPI) in visual studio 
 * Make sure the project works with the environment API web ASP.NET Core 7.0
 *   go to tools -----> package manager -----> packages NuGet
 ##  install this packages
 * Microsoft.EntityFrameworkCore.sqlServer 7.0.5 
 * Microsoft.EntityFrameworkCore.Tools 7.0.12
 * Microsoft.VisualStudio.Web.CodeGeneration.Design 7.0.11
 * Swashbuckle.AspNetCore 6.5.0
  ##  configure in visual studio
 * in the file appsettings.json in the DevConnection change the server name to the corresponding installed server if it is in visual studio
 *  go to tools -----> package manager -----> package manager console
 * Execute this command  
   ---
       enable-migrations
       Update-Database
    ---
 ##  configure in other code editor 
 * in the file appsettings.json in the DevConnection change the server name with Server=.,1433
 * User Id = with your User Id
 * password = with your password
 * Execute this command  
   ---
       enable-migrations
       Update-Database
    ---
 *  After  Execute this command creating a database in sql server named WorkerDetailDB
 *  You can verify that backend is working correctly by: Swagger UI 
#  frontend (WorkerAPI)
* install node
[ link for Downloads Node.js](https://nodejs.org/en/download)
 * install angular/cli 16.2.11
   Execute this command :
 ---
      
      npm install -g @angular/cli@16.2.11
 ---
  * install angular/core 16.2.12
   Execute this command :
 ---
      
      npm install -g @angular/core@16.2.12
 ---
   * install Package Manager: npm 10.2.3
   Execute this command :
 ---
      
      npm install 
 ---
 * for run project   
    Execute this command :
  ---
    cd WorkerAPI
    ng serve --open
   ---
