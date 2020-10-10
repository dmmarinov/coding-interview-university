const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

function bfs(start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
       if (destination === 'BKK') {
         console.log('found it');
       }

       if (!visited.has(destination)) {
         visited.add(destination);
         queue.push(destination);
       }
    }
  }
}

bfs('PHX');

function dfs(start, visited = new Set(), steps = 0) {
  visited.add(start);

  const destinations = adjacencyList.get(start);

  if (!destinations) {
    return;
  }

  for (const destination of destinations) {
    if (destination === 'BKK') {
      console.log(`DFS found Bangkok in ${steps} steps`);
      return;
    }

    if (!visited.has(destination)) {
      steps++;
      dfs(destination, visited, steps);
    }
  }
}

dfs('PHX');
