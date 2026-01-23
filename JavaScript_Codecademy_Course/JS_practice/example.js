async function main() {
  // Like the browser fetch API, the default method is GET
  const response = await fetch('https://api.chucknorris.io/jokes/random')
console.log(response)
}

  main()