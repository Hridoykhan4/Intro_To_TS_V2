enum TrainClass {
  Shovon = 200,
  Snigdha = 400,
  AC = 100,
}


enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(keyof typeof StatusCode);