const postUrl = 'https://werewolf-tracker.herokuapp.com/userSighting'
const form = document.querySelector('form')

pinItFunctionality()

function pinItFunctionality(){
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const data = new FormData(document.querySelector('form'))
    var formDatas = {
            'threat': data.get('threatLevel'),
            'location': data.get('location'),
            'color': data.get('color')
        }
    fetch((postUrl), {
      method: 'POST',
      headers: new Headers ({'Content-Type' : 'application/json'}),
      body: JSON.stringify(formDatas)
    })
    .then((resp) => resp.json())
  })
}
