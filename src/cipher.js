const cipher = {
  let offset = document.getElementById('numero').value;
  let str = document.getElementById('text').value;
  let newStr = '';


  encode = function (offset, str) {
      for (let i=0; i<str; i++) {
        let currentLetter = str [i];
        if (currentLetter==='') {
          newString += currentLetter;
          continue;
        let convert = [(str.charCodeAt (0))-65+ offset]%26 +65
        let result = str.fromCharCode(convert);
        }
      }
    }

  decode = function (offset, str) {
    let deconvert = [(str.charCodeAt (0))-65- offset]%26 +65
    let result = str.fromCharCode(deconvert);
    }

};

export default cipher;
