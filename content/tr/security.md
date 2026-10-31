# Güvenliğe genel bakış

## Neler korunuyor

Hiçbir şey düz metin olarak iletilmez. Röle ve köprü yalnızca şifreli veriyi ve yönlendirme bilgisini görür, hiçbir şey saklamaz. Kabuk diskte ne saklarsa şifreli saklar, sunucu adları dahil.

Kasanızı sıfırlayabilecek bir sunucu yoktur. Kilit açma yönteminizi ve kurtarma anahtarınızı kaybederseniz verileriniz kaybolur.

## Web uygulamasının sınırları

web.kabuk.app adresindeki web uygulaması tarayıcınıza her ziyarette yeniden gönderilir. Bu site ele geçirilirse size zararlı kod sunabilir. Masaüstü ve mobil uygulamalarda bu zayıflık yoktur.

Riski azaltmak için sıkı bir içerik güvenlik politikası, alt kaynak bütünlüğü, üçüncü taraf betik kullanmama, ayrı bir köken ve kurulabilir web uygulaması kullanıyoruz. Web uygulamasını kendiniz de barındırabilirsiniz.

Web üzerinde kısa bir PIN kasanız için koruma olarak kabul edilmez. Kurulum uzun bir parola veya geçiş anahtarı ister. PIN yalnızca zaten çalışan bir oturumu açabilir.
