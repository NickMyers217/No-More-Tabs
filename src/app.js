import fs from 'fs'
import R  from 'ramda'
import M  from 'Monet'


// read :: String -> IO String
const read = fileName => {
  return (() => fs.readFileSync(fileName).toString()).io()
}

// write :: String -> IO ()
const write = text => {
  return (() => console.log(text)).io()
}

// replaceTabs :: Int -> String -> String
const replaceTabs = function (numSpaces, str) {
  const replacement = R.repeat(' ', numSpaces).join('')

  return str
    .trim()
    .split('\n')
    .map(R.replace(/\t/g, replacement))
    .join('\n')
}.curry()

// readAndWrite :: String -> IO ()
const readAndWrite = fileName =>
  read(fileName)
  .map(replaceTabs(2))
  .bind(write)
  .run()

// main :: IO ()
const main = readAndWrite('gulpfile.babel.js')
