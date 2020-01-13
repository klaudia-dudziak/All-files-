class Wallet {
constructor(money) {
    let _money = money;

    //pobierani aktualnej zawartosci portfela
    this.getWalletValue = () => _money;

    //sprawdzanie ilosci środków
    this.checkCanPlay = (value) => {
        if( _money < value ) return false;
        else return true;
    }
    // dodawanie i odejmowanie srodków 
    this.changeWallet = (value, type = "+") => {
        if(typeof value === 'number' && !isNaN(value)) {
            if( type === "+") {
                _money += value
            } else if ( type === "-") {
                _money -= value
            } else { console.log("error")}
        }
    }
}
}