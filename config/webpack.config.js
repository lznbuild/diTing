const path = require("path");
 
module.exports={
  mode:"production",
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"feError.js",
    library:"feError",// 在全局变量中增加一个library变量
    libraryTarget:"umd"
  }
}