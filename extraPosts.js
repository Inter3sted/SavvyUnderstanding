const posts = [
  { id: 1, userId: 2, userName: "Jimothy", title: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet." },
  { id: 2, userId: 3, title: "Sed ut Perspiciatis", body: "Sed ut perspiciatis unde omnis iste natus error." },
  { id: 3, userId: 2, title: "Neque porro quisquam est", body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet." },
  { id: 4, userId: 1, title: "Et harum quidem", body: "At vero eos et accusamus et iusto odio dignissimos ducimus." },
  { id: 5, userId: 5, userName: "Jimothy", title: "Temporibus autem", body: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet." },
  { id: 6, userId: 2, title: "Facere possimus", body: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus." },
  { id: 7, userId: 4, title: "Lorem Ipsum Dolor", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 8, userId: 3, title: "Consectetur Adipiscing", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 9, userId: 5, userName: "Jimothy", title: "Qui dolorem ipsum", body: "Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
  { id: 10, userId: 1, title: "Sed quia non numquam", body: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
  { id: 11, userId: 1, userName: "Jimothy", title: "The Art of War", body: "Sun Tzu said: In war, the way is to avoid what is strong and to strike at what is weak." },
  { id: 12, userId: 2, title: "The Hitchhiker's Guide to the Galaxy", body: "The answer to the ultimate question of life, the universe, and everything is 42." },
  { id: 13, userId: 3, title: "The Catcher in the Rye", body: "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it." },
  { id: 14, userId: 4, title: "The Lord of the Rings", body: "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost." },
  { id: 15, userId: 5, userName: "Jimothy", title: "To Kill a Mockingbird", body: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it." },
  { id: 16, userId: 1, title: "The Great Gatsby", body: "I hope she'll be a fool -- that's the best thing a girl can be in this world, a beautiful little fool." },
  { id: 17, userId: 2, title: "Pride and Prejudice", body: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." },
  { id: 17, userId: 2, title: "Pride and Prejudice", body: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." },
  { id: 18, userId: 3, title: "Wuthering Heights", body: "Whatever our souls are made of, his and mine are the same." },
  { id: 19, userId: 1, userName: "Jimothy", title: "Brave New World", body: "Actual happiness always looks pretty squalid in comparison with the overcompensations for misery." },
  { id: 20, userId: 5, title: "1984", body: "If you want to keep a secret, you must also hide it from yourself." },
  { id: 21, userId: 4, userName: "Jimothy", title: "The Picture of Dorian Gray", body: "The only way to get rid of temptation is to yield to it." },
  { id: 22, userId: 2, title: "The Brothers Karamazov", body: "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others." },
  { id: 23, userId: 1, title: "The Trial", body: "It is only because of their stupidity that they're able to be so sure of themselves." },
  { id: 24, userId: 4, title: "The Picture of Dorian Gray", body: "The only way to get rid of a temptation is to yield to it." },
  { id: 25, userId: 5, userName: "Jimothy", title: "1984", body: "War is peace. Freedom is slavery. Ignorance is strength." },
  { id: 26, userId: 3, title: "The Brothers Karamazov", body: "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others." },
  { id: 27, userId: 2, title: "The Odyssey", body: "Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man." },
  { id: 28, userId: 1, title: "Moby-Dick", body: "It is not down on any map; true places never are." },
  { id: 29, userId: 5, userName: "Jimothy", title: "The Handmaid's Tale", body: "Nolite te bastardes carborundorum. Don't let the bastards grind you down." },
  { id: 30, userId: 4, title: "The Divine Comedy", body: "In the middle of the journey of our life, I found myself within a dark woods, for the straight way was lost." },
  { id: 31, userId: 1, title: "The Sun Also Rises", body: "You can't get away from yourself by moving from one place to another." },
];

// This is the story. Jimothy, a user on a major social site is causing a lot of problems lately. He's been posting inappropriate content of ducks with umbrellas, and spreading false information about ducks in general. As a moderator of the platform, it's your job to investigate and report Jimothy's actions. The company is wanting you to list every instance of the user named Jimothy. 


// Congratulations, you did it, you've found Jimothy's posts. Now that you've found them, create a new array to use that doesn't have Jimothy associated with it.
