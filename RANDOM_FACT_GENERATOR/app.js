const button = document.querySelector('button')
const text = document.querySelector('h2')
const container = document.querySelector('.container')

// Now we will create a new image element

const newImage = document.createElement('img')

// Now we will create an array which will have objects, containing 
// facts and fact images

const facts = [
    {
        id: 'e1',
        text: 'the heaviest onion ever grown was 17 pounds',
        img2: './facts/onion.png'
    },

    {
        id: 'e2',
        text: 'the avarage person spends two weeks of life waiting at traffic signals',
        img2: './facts/traffic.png'
    
    },
    {
        id: 'e3',
        text: 'A group owls called a parliment',
        img2: './facts/owl2.png'

    },  
    {
        id: 'e4',
        text: 'the house cat can reach speeds of up to 30mph',
        img2: './facts/cat.png'
    }, 

    {
        id: 'e5',
        text: 'Each sunflower contain as many as 1000 to 2000 seeds',
        img2: './facts/sunflower.png'
    },

    {
        id: 'e6',
        text: 'you lose up to 30percent of your taste buds during the flight',
        img2: './facts/flight.png'
    },
    {
        id: 'e7',
        text: 'The most iconic donut shop in Hollywood is Randys Donuts. It has appeared in many movies including Crocodile Dundee and Iron Man 2',
        img2: './facts/donut.png'
    },
    {
        id: 'e8',
        text: 'the people who are crazy enough to think they can change the world are the ones who do - steve jobs',
        img2: './facts/jobs1.png'
    },
]

     /// creating two varible where we will store the facttext and fact image

     let random;
     let randomImg;

     // we want generate text and image randomly we will create function

     const randomFact = () => {

        // to get random number from the facts array 
        // this will produce a random number for us

        let i= Math.floor(Math.random() * facts.length)

       // now using the random number generated we will select
       // the img and the text from array
     

     random = facts[i].text
     randomImg = facts[i].img2

     // now we have our random text and image

     }

     // now we will listen to a button click event and then produce
     // our random fact and insert it

     button.addEventListener( 'click', () => {

        // calling random fact function

        randomFact()

        //changing the inner text

        text.innerText = random

        //adding image now

        newImage.src = randomImg

        //appending the image to the container
         
        container.appendChild(newImage)

        // that is it, we are done
     })
