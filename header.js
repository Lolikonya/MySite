const template = document.createElement('template')
template.innerHTML =
	'<header> <div class="navbar">  <div class="dropdown"> <button class="dropbtn">Значимые места <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content"> <a href="index_z_1.html">Гидростроитель</a> <a href="index_z_2.html">Оранжерея</a> <a href="index_z_3.html">Площадь Ленина</a> </div> </div> <div class="dropdown"> <button class="dropbtn">Люди <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content"> <a href="index_l_1.html">Высоцкий</a> <a href="index_l_2.html">Логинов</a> <a href="index_l_3.html">Ленин</a> </div> </div> <div class="dropdown"> <button class="dropbtn">Герои сказок <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content"> <a href="index_g_1.html">Ученый Кот</a>  </div> </div> <div class="dropdown"> <button class="dropbtn">Животные <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content"> <a href="index_a_1.html">Собака поводырь</a> <a href="index_a_2.html">Бегемотики</a> <a href="index_a_3.html">Суслики</a> </div> </div> <div class="dropdown"> <button class="dropbtn">Исторические события <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content"> <a href="index_i_1.html">Жертвы репрессий</a> <a href="index_i_2.html">Воины-интернационалисты</a> <a href="index_i_3.html">Мемориал</a> </div> </div> </div> </header>'

document.body.appendChild(template.content)
