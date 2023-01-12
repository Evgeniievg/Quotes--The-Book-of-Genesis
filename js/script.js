let quotes = [
  {
    quote: "In the beginning God created the heavens and the earth.",
    link: 'Genesis 1:1'
  },
  {
    quote: "And God said, “Let there be light,” and there was light.",
    link: 'Genesis 1:3'
  },
  {
    quote: "And there was evening, and there was morning—the third day.",
    link: "Genesis 1:11"
  },
  {
    quote: "God made two great lights—the greater light to govern the day and the lesser light to govern the night. He also made the stars.",
    link: "Genesis 1:16"
  },
  {
    quote: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
    link: "Genesis 1:27"
  },
  {
    quote: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work.",
    link: "Genesis 2:2"
  },
  {
    quote: "Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done.",
    link: "Genesis 2:3"
  },
  {
    quote: "Then the LORD God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.",
    link: "Genesis 2:7"
  },
  {
    quote: "Now the LORD God had planted a garden in the east, in Eden; and there he put the man he had formed.",
    link: "Genesis 2:8"
  },
  {
    quote: "Then the LORD God made a woman from the rib he had taken out of the man, and he brought her to the man.",
    link: "Genesis 2:22"
  },
  {
    quote: "Adam and his wife were both naked, and they felt no shame.",
    link: "Genesis 2:25"
  },
  {
    quote: "'You will not certainly die,' the serpent said to the woman.",
    link: "Genesis 3:4"
  },
  {
    quote: "When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it.",
    link: "Genesis 3:6"
  },
  {
    quote: "By the sweat of your brow you will eat your food until you return to the ground, since from it you were taken; for dust you are and to dust you will return.",
    link: "Genesis 3:19"
  },
  {
    quote: "So the LORD God banished him from the Garden of Eden to work the ground from which he had been taken.",
    link: "Genesis 3:23"
  },
  {
    quote: "Now Cain said to his brother Abel, “Let’s go out to the field.” While they were in the field, Cain attacked his brother Abel and killed him.",
    link: "Genesis 4:8"
  },
  {
    quote: "Altogether, Adam lived a total of 930 years, and then he died.",
    link: "Genesis 5:5"
  },
  {
    quote: "The LORD regretted that he had made human beings on the earth, and his heart was deeply troubled.",
    link: "Genesis 6:6"
  },
  {
    quote: "So God said to Noah, “I am going to put an end to all people, for the earth is filled with violence because of them. I am surely going to destroy both them and the earth.",
    link: "Genesis 6:13"
  },
  {
    quote: "Noah did everything just as God commanded him.",
    link: "Genesis 6:22"
  },
  {
    quote: "And rain fell on the earth forty days and forty nights.",
    link: "Genesis 7:12"
  },
  {
    quote: "and on the seventeenth day of the seventh month the ark came to rest on the mountains of Ararat.",
    link: "Genesis 8:4"
  },
  {
    quote: "When the dove returned to him in the evening, there in its beak was a freshly plucked olive leaf! Then Noah knew that the water had receded from the earth.",
    link: "Genesis 8:11"
  },
  {
    quote: "“As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease.”",
    link: "Genesis 8:22"
  },
  {
    quote: "I establish my covenant with you: Never again will all life be destroyed by the waters of a flood; never again will there be a flood to destroy the earth.",
    link: "Genesis 9:11"
  },
  {
    quote: "Now the whole world had one language and a common speech.",
    link: "Genesis 11:1"
  },
  {
    quote: "That is why it was called Babel —because there the LORD confused the language of the whole world. From there the LORD scattered them over the face of the whole earth.",
    link: "Genesis 11: 9"
  },
  {
    quote: "The LORD appeared to Abram and said, “To your offspring I will give this land.” So he built an altar there to the LORD, who had appeared to him.",
    link: "Genesis 12:7"
  },
  {
    quote: "Is not the whole land before you? Let’s part company. If you go to the left, I’ll go to the right; if you go to the right, I’ll go to the left.",
    link: "Genesis 13:9"
  },
  {
    quote: "Now the people of Sodom were wicked and were sinning greatly against the LORD.",
    link: "Genesis 13:13"
  },
  {
    quote: "After this, the word of the LORD came to Abram in a vision: “Do not be afraid, Abram. I am your shield,your very great reward. ”",
    link: "Genesis 15:1"
  },
  {
    quote: "Sarah was afraid, so she lied and said, “I did not laugh.” But he said, “Yes, you did laugh.”",
    link: "Genesis 18:15"
  },
  {
    quote: "Then the LORD said, “The outcry against Sodom and Gomorrah is so great and their sin so grievous that I will go down and see if what they have done is as bad as the outcry that has reached me. If not, I will know.”",
    link: "Genesis 18:20-21"
  },
  {
    quote: "The two angels arrived at Sodom in the evening, and Lot was sitting in the gateway of the city. When he saw them, he got up to meet them and bowed down with his face to the ground.",
    link: "Genesis 19:1"
  },
  {
    quote: "As soon as they had brought them out, one of them said, “Flee for your lives! Don’t look back, and don’t stop anywhere in the plain! Flee to the mountains or you will be swept away!”",
    link: "Genesis 19:17"
  },
  {
    quote: "Then the LORD rained down burning sulfur on Sodom and Gomorrah—from the LORD out of the heavens.",
    link: "Genesis 19:24"
  },
  {
    quote: "Then God said, “Take your son, your only son, whom you love—Isaac—and go to the region of Moriah. Sacrifice him there as a burnt offering on a mountain I will show you.”",
    link: "Genesis 22:2"
  },
  {
    quote: "“Do not lay a hand on the boy,” he said. “Do not do anything to him. Now I know that you fear God, because you have not withheld from me your son, your only son.”",
    link: "Genesis 22:12"
  },
  {
    quote: "After Abraham’s death, God blessed his son Isaac, who then lived near Beer Lahai Roi.",
    link: "Genesis 25:11"
  },
]

let button = document.querySelector('.genesis__button')
let geneisText = document.querySelector('.genesis__text')
let quoteText = document.querySelector('.genesis__quote')
let quoteLink = document.querySelector('.genesis__link')
button.addEventListener('click',  getNewQuote);

function getNewQuote() {
  console.log('Hi')
  let randNum = Math.floor(Math.random() * quotes.length);
  quoteText.innerHTML = quotes[randNum].quote;
  quoteLink.innerHTML = quotes[randNum].link
  geneisText.classList.add('active')
}
