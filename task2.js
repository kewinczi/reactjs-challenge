String.prototype.transformEmails = function() {
    const potentialEmailsArray = this.split(',').map(item => item.trim());
  	const emailsArray = [];
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  	console.log(potentialEmailsArray)
  	potentialEmailsArray.forEach(item => {
      const isValid = re.test(item);
      if (isValid) {
        emailsArray.push(item)
      }
    })
    return emailsArray;
}

console.log('test@email.com,  test@mail, test+1@mail.net'.transformEmails())