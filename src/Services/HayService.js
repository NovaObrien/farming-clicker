import { logger } from '../utils/Logger'

class HayService {
  harvestHay(owned) {
    logger.log('harvested hay')
  }
} export const hayService = new HayService()
