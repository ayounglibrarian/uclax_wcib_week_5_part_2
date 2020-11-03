//document.querySelector('html').style.backgroundColor = 'white';


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const question = document.querySelector('.question');

const customCity = document.getElementById('customcity');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside in Philadelphia, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  let newStory = storyText.replace(':insertx:', xItem);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  let name=customName.value;
  if(name !== '') {
    //let name = customName.value;
      newStory = newStory.replace('Bob', name);

    //newStory = storeText
  } else {
    name = 'Bob';
  }

  if(customCity.value !== '') {
    let city = customCity.value;
      newStory = newStory.replace('Philadelphia', city);
  }
  if(document.getElementById("moon").checked) {
    var gravity = 0.165;
    var tempf = -208;

  } else {
    var gravity = 1;
    var tempf = 94;

  }
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14 * gravity );
    //let weight = '27';
    weight = weight.toString().concat(' stone');

    let temperature =  Math.round((tempf-32) * (5/9));

    temperature = temperature.toString().concat(' centigrade');


    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);

  } else if (document.getElementById("moon").checked) {
    let weight = Math.round(300 * gravity );
    //let weight = '27';
    weight = weight.toString().concat(' pounds');

    let temperature =  tempf;

    temperature = temperature.toString().concat(' fahrenheit');


    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);

  }
//story.textContent = xItem;
//story.textContent = customCity.value;

  story.textContent = newStory;
  story.style.visibility = 'visible';

  question.textContent = 'What does ' + name +' want to eat?';

  question.style.visibility = 'visible';



//Disables generate random story button
  randomize.disabled = true;


//This is a normal set of scripts to make a button appear
  cupcake = document.createElement('button');
  cupcake.className = "btn btn-dark";
  cupcake.textContent = 'Eat a cupcake';
  document.getElementById("rightHere").appendChild(cupcake);


//  resetButton.addEventListener('click', resetGame);






cookie = document.createElement('button');
cookie.className = "btn btn-dark";
cookie.textContent = 'Eat a cookie';
document.getElementById("rightHere").appendChild(cookie);


//Watches for click of reset button and calls function endGame
cupcake.addEventListener('click', cupcakeEnd);
cookie.addEventListener('click', cookieEnd);
}  //end of function result()



function cupcakeEnd() {
  //cupcake.parentNode.removeChild(cupcake); //removes button
  cupcake.disabled = true;
  cookie.disabled = true;
      document.body.style.background = 'url(http://musicbybrianyoung.com/uclax_wcib_week_5_part_2/images/cupcake.jpg) no-repeat center center';

) no-repeat center center';
      document.body.className += ' cupcakebackground';

      final = document.createElement('button');
      final.className = "btn btn-primary";
      final.textContent = 'Restart Game';
      document.getElementById("reloadlocation").appendChild(final); //getElementByID sets location based on id in HTML

      final.addEventListener('click', endGame); //allows for reloading of page when you click button
    }

function cookieEnd() {
  cupcake.disabled = true;
  cookie.disabled = true;
  document.body.className += ' cookiebackground';

  final = document.createElement('button');
  final.className = "btn btn-primary";
  final.textContent = 'Restart Game';
  document.getElementById("reloadlocation").appendChild(final);

  final.addEventListener('click', endGame);
  console.log("here at line 154!"); 
  document.body.style.background = 'url(http://musicbybrianyoung.com/uclax_wcib_week_5_part_2/images/cookie.jpg) no-repeat center center';

) no-repeat center center ';

}


//this ends the game and reloads the page
function endGame() {
  location.reload();
}
