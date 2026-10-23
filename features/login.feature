Feature: Login Sauce Demo

  Scenario: Login Berhasil dengan Pengguna Standar
    Given Pengguna membuka halaman utama Sauce Demo
    When Pengguna memasukkan username "standard_user" dan password "secret_sauce"
    When Pengguna menekan tombol login Sauce Demo
    Then Pengguna menambahkan produk "Sauce Labs Backpack" ke keranjang belanja
    Then pengguna masuk ke halaman keranjang belanja dan melihat produk "Sauce Labs Backpack" di dalamnya
    Then pengguna menekan tombol checkout dan diarahkan ke halaman checkout
    Then pengguna mengisi informasi checkout dengan nama depan "John", nama belakang "Doe", dan kode pos "12345"
    Then pengguna menekan tombol continue dan diarahkan ke halaman overview
    Then pengguna menekan tombol finish dan diarahkan ke halaman konfirmasi pesanan
    Then pengguna melihat pesan konfirmasi "Thank you for your order!"
