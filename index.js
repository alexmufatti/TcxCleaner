var TcxCleaner = require('./TcxCleaner');

if (process.argv.length < 4)
{
  console.log("Usage: node index.js activity.tcx output.tcx");
}else {
  var fileout = process.argv[3];
  var filein = process.argv[2];
  var tcx = new TcxCleaner();

  tcx.Run(filein, fileout);

}
