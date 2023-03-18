let button = document.getElementById("button")
button.addEventListener("click", function(){
   let quotes = {
       "Valentine from JoJo-Steel Ball Run": "The one who took the first napkin determines everything. The rules of this world are determined by the same principle as “right, or left?”! In a society like this table, a state of equilibrium, once one makes the first move everyone must follow! In every era … This world has been operating by this napkin principle.",
       "Yoshikage Kira from JoJo-Diamond Is Unbreakable": "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone..",
       "Steven Armstrong from Metal Gear Rising Vengeance": "I have a dream. That one day every person in this nation will control their own destiny. A nation of the truly free, dammit. A nation of action, not words, ruled by strength, not committee!",
       "Hayao Miyazaki": "You must see with eyes unclouded by hate. See the good in that which is evil, and the evil in that which is good. Pledge yourself to neither side, but vow instead to preserve the balance that exists between the two.",
       "Albert Einstein":"The only thing necessary for the triumph of evil is for good men to do nothing.",
       "Diavolo from JoJo-Golden Wind": "No one can escape the fate that was chosen for them. All that remains is the end, where you will perish. Eternal greatness exists only within myself. Sing a song of sorrow in a world where time has vanished!",
       
    }
let authors = Oblect.keys(quotes)
let author = authors[Math.floor(Math.random() * authors.length)]
let quote = quotes[author]
let text = document.getElementById("quote").innerText = quote
let quoteAuthor = document.getElementById("quoteAuthor").innerText = author
})