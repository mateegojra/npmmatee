module.exports = () => {
var msgs = ['Full Stack Developer', 'Dev Ops', 'DB Administration', 'Team Lead', 'engrmatee01@gmail.com']
for(var i=0; i<6; i++)
{
    console.log("\x1b["+(30+i)+"m", msgs[i-1]);
}

console.log("\x1b[1m", "Thank You!!!");
}
