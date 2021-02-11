class Formatter {
  //add static methods here

  static capitalize(string){

    return string.charAt(0).toUpperCase() + string.slice(1)

  }

  static sanitize(string){

      return string.replace( /[^A-Za-z0-9 '-]/g, '' )

  }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    //splice the sentence in an array of words
    let arrayOfWords = sentence.split( " " )
    //iterate through each word
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        //add capitalized word to object(this)
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }

    //return the array as a string 
    return result.join( " " );
  }
}