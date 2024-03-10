// class User {
//   #password; //Защищенные данные
//   constructor(login){
//     this.login = login;
//   }
//   set password(password){ //сеттер разрешает менять пароль
//     if (password.length < 8){
//       return false;
//     } else {
//       this.#password = password;
//     }
//   }
//   get password(){
//     return this.#password;
//   }
// }

// const admin = new User('admin', '12345');
// admin.password = '134ml';

// console.log(admin.password);
// console.log(admin);

class BankAccount {
  #balance = 100;
  constructor(accountNumber){
    this.accountNumber = accountNumber;
  }
  get balance(){
    return this.#balance;
  }

  set balance(balance){
    if (typeof balance === 'number') {
      this.#balance += balance;
    }
  }
}

const newAccount = new BankAccount('2202-124345')

//newAccount.balance = '-30dfg';
newAccount.balance = -30;
console.log(newAccount);

