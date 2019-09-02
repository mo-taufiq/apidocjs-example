const express = require('express');
const router = express.Router();

/**
 * @apiGroup General
 * @api {get} / Test connection - /
 * @apiName Test Connection
 * @apiDescription Check connection server.
 * @apiPermission none
 * @apiVersion 0.1.0
 * @apiParam {none} none none
 * @apiSuccess {String} message Hello world
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Hello World",
 *     }
 *
 * @apiError ErrorMessages Error Messages.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Error
 *     {
 *       "error": "Error Messages."
 *     }
 * @apiExample Example usage:
 * curl --request GET http://localhost:3000/api/v1/
 */
router.get('/connection_status', (req, res) => {
    res.status(200).json({
        message: 'Hello world'
    })
});

module.exports = router;