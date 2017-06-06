function Monday() {
  exerciseRoutine(liftWeights)
}

function Tuesday() {
  exerciseRoutine(swimFortyLaps)
}

function Wednesday() {
  runFiveMiles()
}

function Thursday() {
  exerciseRoutine(liftWeights)
}

function Friday() {
  exerciseRoutine(swimFortyLaps)
}

function runFiveMiles() {
  console.log('Go for a five-mile run')
}

function liftWeights() {
  console.log('Pump iron')
}

function swimFortyLaps() {
  console.log('Swim 40 laps');
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles()
  postRunActivity()
}

exerciseRoutine(() => console.log('Stretch! Work that core!'))

function morningRoutine(exercise) {
  var breakfast = null

  if (exercise === liftWeights) {
    breakfast = 'protein bar'
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie'
  } else {
    breakfast = 'granola'
  }

  exerciseRoutine(exercise)

  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`)
  }
}

function receivesAFunction(callback) {
  callback()
}

var fn = function() {

}

function returnsANamedFunction() {
  return fn
}

function returnsAnAnonymousFunction() {
  return () => {}
}
