import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-message-page',
  standalone: true,
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css'],
})
export class MessagePageComponent implements OnInit, OnDestroy {
  private audio: HTMLAudioElement;
  isMuted: boolean = false;
  currentPage: number = 0;

  messages: Array<{ title: string; content: string }> = [
    {
      title: 'To my wonderful wife',
      content: `&nbsp;&nbsp;&nbsp;&nbsp;I would like to start with wishing you the happiest of birthdays, I hope this small gift I made you is to your liking. I know it's not much but I thought it'd be a good idea to use my skills to make you this.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;This is the first birthday we'll be spending together while engaged, and by the next one we'll be husband and wife and I cannot wait for that. I cannot wait to make your birthdays more special.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;I want you to always look forward to your birthday, I want to always be able to pleasantly surprise you with gifts and gestures on that special day.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;To me your birthday is a day worth celebrating because it's the day a beautiful soul like yours was brought out into this world, and that soul would be intertwined with mine, for we were destined for each other since forever.`,
    },
    {
      title: 'How it all started',
      content: `&nbsp;&nbsp;&nbsp;&nbsp;The day I found your profile on Tinder, I didn't expect I'd find the woman of my dreams in you, you looked very adorable, with the cutest and loveliest smile I've ever seen.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;During that time, I wasn't even looking for a relationship, I was just trying to find people to talk to and cure my loneliness since I spent more time at home, working from home, having no car no nothing, and having just walked out of a messed up relationship.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Yet in no time, and before I even realised it, I was falling for you like a meteorite, I was falling for you fast, yet it was so gentle, so beautiful, so sweet.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Once I realised that, I had one goal, one thing I needed to achieve, and that was to make your heart, mind, body and soul all mine. And I thought the task would be hard and complicated, yet everything went smoothly, your heart wanted me, your mind was bewitched by me, your body was craving mine, and our souls had become one.`,
    },
    {
      title: "How it's going",
      content: `&nbsp;&nbsp;&nbsp;&nbsp;With you I found myself in the happiest and healthiest environment I could ever ask for. Before you I never experienced true mutual love, I've never been cared for the way you do, I've never been valued, I've never been cherished, I've never been put first, you managed to make me feel in a few months what I haven't felt my whole life.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;I want to give you the world, I want to do my best to always make you and keep you happy, safe, and comfortable, you are my priority, you are my home, you are my soulmate, you are my everything.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;I love how close we've become, how as time goes by, we understand each other better, we have more and more fun with each other, instead of things getting boring, they just keep on improving and I love it. From all the dates where we just sit and talk or cuddle, to those where we run errands or do something specific, or even the ones where we just go eat somewhere, every moment with you is special and memorable, and I cherish every second of you.`,
    },
    {
      title: 'What the future holds for us',
      content: `&nbsp;&nbsp;&nbsp;&nbsp;I want to build a home with you, I want to spend the rest of my life with you, I want us to have silly dates at home, I want us to go out whenever we want and go wherever we want, I want to cook with you, I want to cuddle with you every day, I want to take care of you in our home.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;I want to marry you and I will marry you, I've never wanted someone as bad as I want you, in all the aspects, physical, mental, emotional and spiritual, you simply are perfect, you are the perfect one for me and I can't imagine a life without you.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;I can't wait for us to be in our own house, with our kids running around, feeling proud of where we got and what we achieved, that's my goal in life, I want to spend it with you as my wife and the mother of our children, and I want it to always be fun and for the love to always stay magical.`,
    },
    {
      title: 'A final word',
      content: `&nbsp;&nbsp;&nbsp;&nbsp;I want to finish off by thanking you.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Thank you for loving me, for who I am, for what I am, thank you for loving me unconditionally, thank you for loving me with all you have in your heart and not holding anything back, thank you for loving me when I feel unlovable, when I'm not good to you.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Thank you for the most fun and beautiful moments I've had in my life, our dates, the time we spend together, the activities with do, everything with you is fun and memorable.
      &nbsp;&nbsp;&nbsp;&nbsp;Thank you for trusting me with your heart, body and soul, I promise that they are in safe hands and I will take proper care of them, as you are taking good care of mine.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Thank you for being the most beautiful, amazing, loving, caring, fun, hottest, cutest, adorable girl in the universe.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Thank you for being mine and mine alone. Thank you for all the peace and reassurance you give me.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Thank you for everything.<br>`,
    },
    {
      title: 'I love you',
      content: `&nbsp;&nbsp;&nbsp;&nbsp;I love you ❤️ Je t'aime ❤️ أحبك ❤️ Te amo ❤️ Ich liebe dich ❤️ Ti amo ❤️ Eu te amo ❤️ Saya cinta padamu ❤️ Mahal kita ❤️ Aš tave myliu ❤️ Ndimakukonda ❤️ Jeg elsker deg ❤️ Aloha wau ia 'oe ❤️ Volim te ❤️ Kocham cię ❤️ T'estimo ❤️ Seni seviyorum ❤️ Te iubesc ❤️ Salanghae ❤️ Miluji tě ❤️ Jag älskar dig ❤️ Ek is lief vir jou ❤️ Tha gradh agam ort ❤️ Ani ohev otach ❤️ Rwy'n dy garu di ❤️ Ngiyakuthanda ❤️ Main tumhe pyar karta hoon ❤️ Phom rak khun ❤️ Mo ni fe re ❤️ Wǒ ài nǐ ❤️ Minä rakastan sinua ❤️ Mi amas vin ❤️ S'agapó ❤️ Ich hath dich leev ❤️ Inhobbok ❤️ Unë të dua ❤️ M'bi feh ❤️ Te sakam ❤️ Taim i' ngra leat ❤️ Kimi o ai shiteru ❤️ Man tumhē pyār kartā hū̃ ❤️ Uhibbuk ❤️ Mi te wo ❤️ Ewe oyeyo ❤️ Amefrɛ wo ❤️ E gowthmeer kha ❤️ Aishiteru ❤️ Mahal kita ❤️ Saranghaeyo ❤️ Nakupenda ❤️
`,
    },
  ];

  constructor() {
    this.audio = new Audio('assets/message-background-music.mp3');
    this.audio.loop = true;
  }

  ngOnInit() {
    this.playMusic();
  }

  ngOnDestroy() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  playMusic() {
    if (!this.isMuted) {
      this.audio.play().catch((error) => {
        console.log('Failed to play music:', error);
      });
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.audio.pause();
    } else {
      this.playMusic();
    }
  }

  nextPage() {
    if (this.currentPage < this.messages.length - 1) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
