# File-storage

### Run server

- First run
- Install Node.js from url: https://nodejs.org/uk/download/
- Open a directory from the project "File-storage"
- Run commands in command line:
    - ``` npm install ```
    - ``` npm run start ```

### APIs

- Get all the files.
  method: GET, url: http://localhost:2000/api/files

- Change the "*.TXT" file
  method: POST, url: http://localhost:2000/api/file/chang
```json
{
  "index" : "1",
  "command" : "chang",  
  "data" : "Heeelllooo"
}
```

- Change the "*.jpg", "*.bmp", "*.png" files
  method: POST, url: http://localhost:2000/api/file/chang
```json
{
  "index" : "3",                
  "command" : "resize",          
  "data" :  {                     
    "width" : 2048,
    "height" : 2048
    }
}
```

### UML
![CloudUML-1](https://user-images.githubusercontent.com/26094358/59628659-da24dd80-9149-11e9-851c-f2efee83e7b3.png)

