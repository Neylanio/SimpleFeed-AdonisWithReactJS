'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//O apiOnly() para somente rotas de API quando nao sera preciso o redirecionamento para formulario
Route.resource('posts', 'PostController').apiOnly()
