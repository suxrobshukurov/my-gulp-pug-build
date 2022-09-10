import replace from 'gulp-replace'; // Поиск и замена
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщение (подсказки)
import browsersync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверка обновления
import ifPlugin from 'gulp-if'; // Условные ветвления

// Экспортируем объект
export const plugins = {
  replace,
  plumber,
  notify,
  browsersync,
  newer,
  if: ifPlugin
};
