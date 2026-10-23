// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Sauce Demo', () => {

  test('Login Berhasil dengan Pengguna Standar', async ({ Given, When, Then, page }) => { 
    await Given('Pengguna membuka halaman utama Sauce Demo', null, { page }); 
    await When('Pengguna memasukkan username "standard_user" dan password "secret_sauce"', null, { page }); 
    await When('Pengguna menekan tombol login Sauce Demo', null, { page }); 
    await Then('Pengguna menambahkan produk "Sauce Labs Backpack" ke keranjang belanja', null, { page }); 
    await Then('pengguna masuk ke halaman keranjang belanja dan melihat produk "Sauce Labs Backpack" di dalamnya', null, { page }); 
    await Then('pengguna menekan tombol checkout dan diarahkan ke halaman checkout', null, { page }); 
    await Then('pengguna mengisi informasi checkout dengan nama depan "John", nama belakang "Doe", dan kode pos "12345"', null, { page }); 
    await Then('pengguna menekan tombol continue dan diarahkan ke halaman overview', null, { page }); 
    await Then('pengguna menekan tombol finish dan diarahkan ke halaman konfirmasi pesanan', null, { page }); 
    await Then('pengguna melihat pesan konfirmasi "Thank you for your order!"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Pengguna membuka halaman utama Sauce Demo","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Pengguna memasukkan username \"standard_user\" dan password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":29,"value":"\"standard_user\"","children":[{"start":30,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":58,"value":"\"secret_sauce\"","children":[{"start":59,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Pengguna menekan tombol login Sauce Demo","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Pengguna menambahkan produk \"Sauce Labs Backpack\" ke keranjang belanja","stepMatchArguments":[{"group":{"start":28,"value":"\"Sauce Labs Backpack\"","children":[{"start":29,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then pengguna masuk ke halaman keranjang belanja dan melihat produk \"Sauce Labs Backpack\" di dalamnya","stepMatchArguments":[{"group":{"start":63,"value":"\"Sauce Labs Backpack\"","children":[{"start":64,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then pengguna menekan tombol checkout dan diarahkan ke halaman checkout","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then pengguna mengisi informasi checkout dengan nama depan \"John\", nama belakang \"Doe\", dan kode pos \"12345\"","stepMatchArguments":[{"group":{"start":54,"value":"\"John\"","children":[{"start":55,"value":"John","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":76,"value":"\"Doe\"","children":[{"start":77,"value":"Doe","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":96,"value":"\"12345\"","children":[{"start":97,"value":"12345","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then pengguna menekan tombol continue dan diarahkan ke halaman overview","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then pengguna menekan tombol finish dan diarahkan ke halaman konfirmasi pesanan","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then pengguna melihat pesan konfirmasi \"Thank you for your order!\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Thank you for your order!\"","children":[{"start":35,"value":"Thank you for your order!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end