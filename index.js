import { fifaData } from './fifa.js';
console.log(fifaData);

// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

//(a) Home Team name for 2014 world cup final
console.log(fifaData[828][`Home Team Name`]);
//(b) Away Team name for 2014 world cup final
console.log(fifaData[828][`Away Team Name`]);
//(c) Home Team goals for 2014 world cup final
console.log(fifaData[828][`Home Team Goals`]);
//(d) Away Team goals for 2014 world cup final
console.log(fifaData[828][`Away Team Goals`]);
//(e) Winner of 2014 world cup final 
console.log(fifaData[828][`Win conditions`]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


function getFinals(data){

    //let finals = data.filter(final => final.Stage === 'Final');
    
    const finals = [];

    data.filter(final => {
        if(final.Stage === 'Final'){
            finals.push(final)
        }
    });
    return finals;
   //data.filter(final => final.Stage === 'final');
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data) {
    let result = data.map(data => data.Year)
    return result;
};

 console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the 
callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data) {

   let awayTeam = data[`Away Team Goals`];
   let homeTeam = data[`Home Team Goals`];

   let winner = data.map(data => awayTeam > homeTeam? `${data[`Away Team Name`]}` : `${data[`Home Team Name`]}`)

  return winner;
};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
    
    years.forEach((year, index) => console.log(`In ${year}, ${winners[index]} won the world cup!`));
};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {

    let finalsTeam = getFinals(fifaData);
    //console.log(finalsTeam)

    let winningTeams = getWinners(getFinals(fifaData));
    //console.log(winningTeams);

    //let teamInitial = winningTeams.forEach(team => team === finalsTeam[`Home Team Name`] ? console.log(finalsTeam[`Away Team Initials`]) : console.log(finalsTeam[`Home Team Initials`]));

    
    //let team = if( initials === )

    //let wins = data.reduce((total, initials) => total++, 0);
    //console.log(wins);
    
};

getCountryWins();

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const goalsPerMatch = data.map( match => (match[`Away Team Goals`] + match[`Home Team Goals`]));

    console.log(goalsPerMatch.length) //verifying actual length of data passsed

    let avgGoals = goalsPerMatch.reduce((sum, current) => sum + current / goalsPerMatch.length, 0);

    return avgGoals;
};

console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals() {

    let finals = getFinals(fifaData);
    let finalsTeams = [];

    //passing out to an array all teams that played in a final
    let selectTeams = finals.map(team =>{
        finalsTeams.push(team[`Away Team Name`]);
        finalsTeams.push(team[`Home Team Name`]); 
    });
    console.log(finalsTeams);

    //checking each team against data for goal count and number of appearance
    //forEach items of the teams array, filter through the array, and increase a counter everytime it is found

    finals.forEach((eachTeam, index)=> {
        let teamAppearance = []; //array holds each team appearance
        let teamGoals = []; //array holds total goals
        //console.log(eachTeam);
        finalsTeams.filter(team => {
            let appearance = 0; //instantiates each teams appearance to zero per search
            let goals = 0; //instantiates each teams goals to zero per search
            if(team[index] === eachTeam[`Away Team Name`] || team === eachTeam[`Home Team Name`]){
                console.log(team);
                appearance ++;
                //console.log(`${team} appeared ${appearance}`);
                if(team === eachTeam[`Away Team Name`]){
                    goals+=eachTeam[`Away Team Goals`];
                    console.log(`${team} scores ${eachTeam[`Home Team Goals`]} goals`);
                }else{
                    goals+=eachTeam[`Home Team Goals`];
                    console.log(`${team} scores ${eachTeam[`Home Team Goals`]} goals `);
                }
                //console.log(goals)
                //at the end of the search pushes final figure inside array
                teamAppearance.push();
                teamGoals.push(goals);
            }
            
        });
        //console.log(teamGoals);
    });

/*
{team: name,
goals: goals,
appearance: team.filter(team => )}
*/

};
getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
