var express = require('express');
var router = express.Router();
let {PythonShell} = require('python-shell');

let options = {
  mode: 'text',
  pythonOptions: ['-u'], // get print results in real-time
};

router.get('/', async function(req, res) {
  res.render('index');
})

/* GET home page. */
router.get('/:code', async function(req, res) {
  if (req.params.code == "favicon.ico") {
    return;
  }
  if (req.params.code && !req.params.code.includes("import")) {
    console.log(req.params.code)
    var runScript = PythonShell.runString(`just_a_random_variable="flag{gun_safety_dwight}"\n${req.params.code}`, options, function (err, results) {
      console.log('ran code')
      if (err) return res.send(err.traceback);
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
      if (results!=null){res.send(results.join("<br>"));}
      else {
        res.send("No Output")
      }
    });
    setTimeout(() => {
      runScript.childProcess.kill();
      console.log("process killed")
    }, 2000);
  }
  else{
    res.send("Forbidden!");
  }
  
});

module.exports = router;
