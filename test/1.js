
//Câu 1
const a = [1,2,3,4]
const b = [1,4,6,8]
console.log(a.concat(b).filter(e => !a.includes(e) || !b.includes(e))); 
//Câu 2
let List =[
    {
        name:'Arsenal',
        point:99,
        GD:45
    },
    {
        name:'Chelsea',
        point:75,
        GD:39
    },
    {
        name:'MU',
        point:60,
        GD:29
    },
    {
        name:'Liverpool',
        point:88,
        GD:39
    },
]
let newList = List.sort((team1, team2) => team1.point === team2.point ?
        (team1.GD === team2.GD ?
            team1.name.localeCompare(team2.name) :
            team1.GD - team2.GD) :
        team2.point - team1.point)
    for (let i = 0; i < newList.length; i++) {
        const team = newList[i];
        team['position'] = i + 1;
    }
console.log(newList);
