const app = require('express')();
const nba = require('nba.js').default;

// set desired port
app.set('port', (process.env.PORT || 4203));

// nba.stats endpoint with params
// example: localhost:4203/roster/1610612739/2016-17
app.get('/roster/:teamId/:season', (req, res) => {
    nba.stats.teamRoster({
        Season: req.params.season,
        TeamID: req.params.teamId,
        LeagueID: '00'
    })
        .then(response => {
            res.json(response);
        })
        .catch(err => console.error(err));
});

// nba.data endpoint
app.get('/schedule', (req, res) => {
    nba.data.schedule({ year: '2016' })
        .then(response => {
            res.json(response);
        })
        .catch(err => console.error(err));
});

// Listen on port set at top of file
app.listen(app.get('port'), function () {
    console.log('Server listening on port: ', app.get('port'));
    return;
});