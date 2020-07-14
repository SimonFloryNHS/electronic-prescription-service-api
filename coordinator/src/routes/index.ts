import convertPrescriptionRoutes from './prescription/post-convert-full-message'
import preparePrescriptionRoutes from './prescription/post-prepare-message'
import sendPrescriptionRoutes from './prescription/post-send-message'
import healthRoutes from './health/get-health'

export default [
    ...convertPrescriptionRoutes,
    ...preparePrescriptionRoutes,
    ...sendPrescriptionRoutes,
    ...healthRoutes
]
