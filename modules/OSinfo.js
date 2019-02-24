var os = require('os');
var timebeautyfy = require('./convertTime');
var colors = require('colors');

function getOSinfo() {
    process.stdout.write('info o systemie\n');
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.cyan, cpu);
    console.log('Uptime: ~'.green, timebeautyfy.time(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;