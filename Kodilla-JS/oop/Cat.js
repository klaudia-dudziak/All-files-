class Cat {
    legs = 4;
   constructor(weight, name, male) {
       this.weight = weight;
       this.name = name;
       this.male = male;
   }

   setIll(ill,Cat) {
       Cat.ill = ill;
   }

    saying() {
       console.log('miau miau');
   }

   findIllCat(allCats){
       var resultCats = []
        allCats.forEach(cat => {
            if(cat.ill) {
                resultCats.push(cat);
            }
        });

        console.log(resultCats);
   }
}


const dachowiec = new Cat(2, "Kika", "female");
const dachowiec2 = new Cat(3, "Fafik", "male");
const dachowiec3 = new Cat(4, "Ala", "male");
const dachowiec4 = new Cat(2, "Filemon", "female");

Cat.prototype.setIll("ill eye", dachowiec);
Cat.prototype.setIll("ill ear", dachowiec4);

dachowiec.walking = function() {
    console.log('Chodzenie na dwoch łapach');
}

var allCats = [dachowiec, dachowiec2, dachowiec3, dachowiec4];
Cat.prototype.findIllCat(allCats);










