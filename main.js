alert("На этой странице вы можете использовать расширения для просмотра контента!")

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log('Тестирование консольки, проверка URLa', firstHref);