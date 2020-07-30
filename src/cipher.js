const cipher = {
  encode : function (offset, str) {
      let x = [];
      for (let i=0; i<str.length; i++) {
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
          x [i] = ((str.charCodeAt (i))-65+ offset)%26 +65
          } else {
              x[i]= str.charCodeAt (i);
            }
        }
        return x;
  },

  decode : function (offset, str) {
    let x = [];
    for (let i=0; i<str.length; i++) {
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
        if ((str.charCodeAt(i)-65)>=offset) {
          x [i] = ((str.charCodeAt (i))-65- offset)%26 +65
        }
        else {
          x [i] = ((str.charCodeAt (i))-65- offset)%26 +65+26
        }
      }
        else {
            x[i]= str.charCodeAt (i);
          }
      }
      return x;
  }
};

export default cipher;
