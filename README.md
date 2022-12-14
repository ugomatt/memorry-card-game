# Memory Card Game

Play the game https://gamefi-memory-game.netlify.app/

As part of the Hackathon: Everscale ElysiumEverscale GameFi Bounty, I created a memory card game using React, Typescript, Styled components and Everscale SDK.

Each card represents an NFT, We store the NFT metadata onchain. This allows changing properties of objects (characters/items/traits) onchain. Other contracts can read these properties, allowing you to move all game logic onchain.

I wanted to challenge myself to design and implement the Everscale smart contract development based on the actor model, as I had only spent a day with using Typescript previously and never used styled components before. This proved challenging at times, but I found the official docs for both really helpful and concise.

## Reflections

- Writing games/game logic in React is different to doing so in vanilla JS - I found that I had to useEffects to almost act as event listeners instead of conditional statements in a main game loop e.g. a useEffect is fired when 2 cards have been selected that fires a function that checks if the cards are a match or not. I tried to implement this without a useEffect (as the offical React docs recommend that useEffects aren't used in this way) but unfortunately I could not find a viable alternative.

- The introduction of types via typescript helps with squashing bugs and making the code predictable, but really slowed down my development. Part of this is due to me not using Typescript much before, so there was a steep learning curve, but I found myself spending a lot more time adding type/interface definitions, and debugging my code to make typescript happy then I would have liked. However, I can see that the benefits are really...beneficial! As with anything, I think it is a trade off - and that actually sometime like a game (where you really don't want bugs) suits it's use.

- Styled components are neat and fun to use! At first I thought having my styling within my JS file would be messy, but actually I found it very readable and neat. Being able to add dynamic styling based on props is also super useful. I will definitely be exploring this more in the future.

## Next Steps

If I were to continue this project further, my next steps would be:

- to add animations to the cards to further increase the user engagement,
- Allow users to easily transfer their NFT
- add a timer to the game as an extra challenge
- make the app fully responsive
- add some unit tests to the individual components and functions using Jest
- migrate the audio to using the Web Audio API, to give me more control in how the sounds are loaded and played back.

A big stretch goal would be to implement multiplayer via something like socket.io and also create a backend so I could host leaderboards.
