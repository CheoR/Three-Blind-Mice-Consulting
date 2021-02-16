/*
  Object format.
  {
    "id": 1,
    "model": "Macbook Pro",
    "year": 2015
  }
*/
let _computers = []

export const useComputers = () => _computers.slice()

export const getComputers = () => {
 return fetch ("http://localhost:8088/computers")
  .then(response => response.json())
  .then((computerList) => {
   _computers = computerList
  })
}
