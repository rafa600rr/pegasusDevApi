const express = require('express');
const systemSolar = require('./json/systemSolar.json');
const app = express();

app.use(express.json());

// VERB HTTP, GET, POST, PUT E DELETE
app.get('/systemSolar', (req, res) => {
    res.json(systemSolar);
});

// HTTP => GET
app.get('/systemSolar/:id', (req, res) => {
    const { id } = req.params;
    const system = systemSolar.find(sys => sys.id == id);

    if(!system) return res.status(204).json();

    res.json(system);
});

// // HTTP => POST
// app.post("/systemSolar", (req, res) => {
//     const { id, starNature, starName, starTemperature, starOrbit, starDistance, starAtsmophere, starComposition } = req.body;

//     res.json({ id, starNature, starName, starTemperature, starOrbit, starDistance, starAtsmophere, starComposition });
// });

// // HTTP => PUT
// app.put("/systemSolar/:id", (req, res) => {
//     const { id } = req.params;
//     const system = sistemSolar.find(sys => sys.id == id);

//     if(!system) return res.status(204).json();

//     const { id, starNature, starName, starTemperature, starOrbit, starDistance, starAtsmophere, starComposition } = req.body;

//     system.id = id;
//     system.starNature = starNature;
//     system.starName = starName;
//     system.starTemperature = starTemperature;
//     system.starOrbit = starOrbit;
//     system.starDistance = starDistance;
//     system.starAtsmophere = starAtsmophere;
//     system.starComposition = starComposition;

//     res.json(system);
// });

// // HTTP => DELETE
// app.delete("/systemSolar/:id", (req, res) => {
//     const { id } = req.params;
//     const systemFiltered = systemSolar.filter(sys => sys.id != id);

//     res.json(systemFiltered);
// });

// SERVER
app.listen(4432);