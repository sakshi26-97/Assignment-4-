import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})

export class Chart3Component implements OnInit {

  data : string = "";
  lowerCaseData : string  = "";
  wordCount = 0;
  vowelCount = 0;
  articlesCount = 0;
  longestWord = 0;
  shortestWord = 0;
  wordArray = [];
  articles = ['a','an','the'];
  inputFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // Checks whether input string is not empty
    this.inputFormGroup = this._formBuilder.group({
      text: ['', Validators.required]
    });
  }

  // Function to display values 
  onChange(value){
    // console.log(value);
    this.data = value;
    this.lowerCaseData = this.data.toLowerCase();
    this.wordArray = this.lowerCaseData.trim().replace(/\s\s+/g,'').split(' ');
    console.log(this.wordArray);

    this.numberOfWords(this.wordArray);
    this.numberOfVowels(this.lowerCaseData);
    this.numberOfArticles(this.wordArray);
    this.longestWordLength(this.wordArray);
    this.shortestWordLength(this.wordArray);

    if(value==""){
      this.wordCount=0;
    }
  }
    
  // Function to count number of words in string
  numberOfWords(wordArray) {
    console.log(this.wordCount);
    this.wordCount = wordArray.length;

  }

  // Function to count number of vowels in string
  numberOfVowels(lowerCaseData) {
    this.vowelCount = 0;
    const vowel_list = ["a", "e", "i", "o", "u"]
    for (let letter of lowerCaseData){
      if (vowel_list.includes(letter)) {
        this.vowelCount++;
      }
    }
  }

  // Function to count number of articles in string
  numberOfArticles(wordArray) {
    this.articlesCount=0;
    for(let i=0; i< wordArray.length; i++) {
      for (let j=0; j<this.articles.length;j++) {
        if (wordArray[i]==this.articles[j]) {
          this.articlesCount++;
        }
      }
    }
  }

  // Function for length of longest word in string
  longestWordLength(wordArray) {
    this.longestWord = 0;
    for(var i = 0; i < wordArray.length; i++){
      if(wordArray[i].length > this.longestWord){ 
        this.longestWord = wordArray[i].length;
      }
    }
  }

  // Function for length of longest word in string
  shortestWordLength(wordArray) {
    this.shortestWord = 1000;
    for(var i = 0; i < wordArray.length; i++) {
      if(!this.articles.includes(wordArray[i])) {
        if(wordArray[i].length < this.shortestWord) { 
          this.shortestWord = wordArray[i].length;
        }
      }
    }
  }
  
}

  


 



    

