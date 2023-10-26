let balance = 500;
let price = 100;
let code = "A001DFX0";
let postOffice = [null, null, null, "1432HGF", null];
let codeDB = postOffice[3];

if (code === codeDB) {
  console.log(
    `Заберите посылку ${codeDB} из ячейки №4. Ваш счет составляет: ${
      balance - price
    }ед.`
  );
} else {
  console.log("Неверный код. Повторите попытку");
}
