class Wallet {
    constructor(money) {
    let _money = money;
    //pobierani aktualnej zawartosci portfela
    this.getWalletValue = () => _money;

    //sprawdzanie ilosci środków
    this.checkCanPlay = (value) => {
        if(_money >= value) return true;
        return false;
    }
    // dodawanie i odejmowanie srodków, 
    this.changeWallet = (value, type = "+") => {
    if(typeof value === 'number' && !isNaN(value)) {
        if(type === "+") {
            return _money += value;
        } else if (type === "-") {
            return _money -= value;
        } else {
            throw new Error ("Nieprawidłowy typ")
        }
    } else {
        throw new Error ("Nieprawidłowa liczba")
    }
   }
  }
} 