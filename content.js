chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
     if (request.action === "convertToHebrew") {
          var selectedText = window.getSelection().toString();
          var convertedText = splitSantance(selectedText);
          document.execCommand("insertText", false, convertedText);
     }
     if (request.action === "convertToEnglish") {
          var selectedText = window.getSelection().toString();
          var convertedText = splitSantance(selectedText,'en');
          document.execCommand("insertText", false, convertedText);
     }
});
function splitSantance(setance,type='he'){
     const splitArr = setance.split(" ");
     var spStringArr = [];
     splitArr.forEach(e=>{
          console.log(e)
          if(type=='he'){
               spStringArr.push(convertToHebrew(e)); 
          }
          else{
               spStringArr.push(convertToEnglish(e)); 
          }
     })
     return spStringArr.join(" ");
}
function convertToHebrew(word) {
     const keyboardMap = {
          a: 'ש',
          b: 'נ',
          c: 'ב',
          d: 'ג',
          e: 'ק',
          f: 'כ',
          g: 'ע',
          h: 'י',
          i: 'ן',
          j: 'ח',
          k: 'ל',
          l: 'ך',
          m: 'צ',
          n: 'מ',
          o: 'ם',
          p: 'פ',
          q: '/',
          r: 'ר',
          s: 'ד',
          t: 'א',
          u: 'ו',
          v: 'ה',
          w: "'",
          x: 'ס',
          y: 'ט',
          z: 'ז',
     };

     const convertedWord = [...word]
          .map((letter) => keyboardMap[letter.toLowerCase()] || letter)
          .join('');

     return convertedWord;
}
function convertToEnglish(word) {
     const keyboardMap = {
          'ש': 'a',
          'נ': 'b',
          'ב': 'c',
          'ג': 'd',
          'ק': 'e',
          'כ': 'f',
          'ע': 'g',
          'י': 'h',
          'ן': 'i',
          'ח': 'j',
          'ל': 'k',
          'ך': 'l',
          'צ': 'm',
          'מ': 'n',
          'ם': 'o',
          'פ': 'p',
          '/': 'q',
          'ר': 'r',
          'ד': 's',
          'א': 't',
          'ו': 'u',
          'ה': 'v',
          "'": 'w',
          'ס': 'x',
          'ט': 'y',
          'ז': 'z',
     };

     const convertedWord = [...word]
          .map((letter) => keyboardMap[letter.toLowerCase()] || letter)
          .join('');

     return convertedWord;
}
