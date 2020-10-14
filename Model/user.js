// laver en klasse for interesser, denne placeres over User, da User refferere tilbage til interest 

class interests {
    constructor(interests){
    this.interests = interests;
}}

//definerer model-klasse for User
class User {
    constructor(name, birthday, gender, location, email, password, interests){ 
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.location = location; 
    this.email = email;
    this.password = password;
    this.interest = interests;
//der skal muligvis stå  this.interest = new interests;
}};

//eksporter user
module.exports = User;


class freeUser extends User {
    constructor(name, birthday, gender, location, email, password) {
        super(name,birthday, gender, location, email, password);
    }
}

class paymentUser extends User {
    constructor(name, birthday, gender, location, email, password) {
        super(name,birthday, gender, location, email, password);
    }
}

class creditCard {
    constructor(cardholderName, expireDate, cardNumber, CVCNumber) {
        this.cardholderName = cardholderName;
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.CVCNumber = CVCNumber;
    }}



 //hvis interest er det samme skal der ske et match. Til dette benyttes filter 
 /*
class match {
    if(User1.interests = User2.interests) {
    console.log('it´s a match');
}
}
/*


/*
// Funktion sim validere om der er tale om en freeuser eller en paymentuser
function validatePaid() {
    var x = document.getElementById("cardNumber").nodeValue;
    if (x == null) {
// her er brugerens oplysninger hard codet, men det skal importeres fra det samme HTML-form som der refferes til to linjer oppe
    var newUser = new freeUser (this.name, this.birthday, this.gender, this.location, this.email, this.password);
    
//hvis der er et kortnummer oprettes en paymentUser
    }else {
        var newUser = new paymentUser (this.name, this.birthday, this.gender, this.location, this.email, this.password, this.cardholderName, this.expireDate, this.cardNumber, this.CVCNumber);
    }
}

class match extends interest {
    constructor(name){
        super(name);
    }}
    // metode som sammenligner CRUD fra vores forskellige bruger og derved skabes matches 
    // tilføjer funktion sendMessage, da man efter et match får acces til at sende funktioner 

//laver et tomt array, der indeholer ID på alle dem, som har liket
var likedPersons = [];

//laver en funktion, som adder likedede bruger til ovenstående likedPerson array
function like () {
//laver konstanter for fiktive like og disslike knapper 
    let likeBtn = document.getElementById("likeBtn");
    let dissLikeBtn = document.getElementById("dissLikeBtn");
//laver en event listener, der skal gøre noget efter om ma liker 
    likeBtn.addEventListener("click",()=>{
//tilføjer likede brugeres uniqueID til et array
        likedPersons.push(userOnScreen.uniqueUserID) //lav en variabel, der gør at den person der er på displayet er UserID
    })
}
*/