var exec = require('child_process').exec;
hexo.on('new', function(data){
//_exec('"D:\Program Files\Sublime Text 3\sublime_text.exe" ' + data.path);
 exec('start "" "D:/Program Files/Sublime Text 3x64/sublime_text.exe" ' + data.path);
});