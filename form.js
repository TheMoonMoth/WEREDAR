const baseUrl = 'https://werewolf-tracker.herokuapp.com/'
const postUrl = 'https://werewolf-tracker.herokuapp.com/userSighting'
const pinItButton = document.querySelector('.pinIt')
const threatLevel = document.querySelector('.threatLevel')
const color = document.querySelector('.color')
const form = document.querySelector('form')

pinItFunctionality()

function pinItFunctionality(){
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const data = new FormData(document.querySelector('form'))
    var formDatas = {
            'threat': data.get('threatLevel'),
            'location': data.get('location'),
            'color': data.get('color'),
            'name': data.get('name')
        }
    fetch((postUrl), {
      method: 'POST',
      headers: new Headers ({'Content-Type' : 'application/json'}),
      body: JSON.stringify(formDatas)
    })
    .then((resp) => resp.json())
  })
}
