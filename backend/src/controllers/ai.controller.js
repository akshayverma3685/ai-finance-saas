import { chatbotReply } from '../services/ai.service.js'
import { ok } from '../utils/apiResponse.js'
export const chatCtrl = async (req, res, next) => {
  try { return ok(res, { reply: await chatbotReply(req.body.message) }) } catch (e) { next(e) }
}
