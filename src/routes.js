import { Router } from 'express'
import selecaocontroller from './app/controllers/SelecaoController.js'
const router = Router()

//ROTAS
router.get('/selecoes', selecaocontroller.index)
router.get('/selecoes/:id', selecaocontroller.show)
router.post('/selecoes', selecaocontroller.store)
router.put('/selecoes/:id', selecaocontroller.update)
router.delete('/selecoes/:id', selecaocontroller.delete)

export default router