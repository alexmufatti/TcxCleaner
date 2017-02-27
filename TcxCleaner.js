var TcxCleaner = function() {
}

fs = require('fs');
TcxCleaner.prototype.Run = function (filein, fileout)
{
  var self = this;
  fs.readFile(filein, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }else {
      data = self.StripTag(data, "HeartRateBpm");
      data = self.StripTag(data, "ns3:RunCadence");
      self.SaveFile(fileout, data);
    }
  });

}

TcxCleaner.prototype.StripTag = function(data, tag)
{
  var rx=new RegExp("<"+tag+">(.|\n)*?<\/"+tag+">","g");
  data=data.replace(rx,"");
  return data;
}

TcxCleaner.prototype.SaveFile = function(name, data)
{
  fs.writeFile(name, data, function(err) {
    if(err) {
        return console.log(err);
    }else{
          console.log("Done!");
    }
  });
}


module.exports = TcxCleaner;
