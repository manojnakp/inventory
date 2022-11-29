import { Router } from 'express';
const router = Router();

router.param('catid', (req, res, next, id) => {
    console.log('{catid} param used');
    next();
});

router.route('/')
    .get((req, res) => {
        res.json({ok: true});
    })
    .post((req, res) => {
        res.json({ok: false});
    });

router.route('/:catid')
    .get((req, res) => {
        res.json({ok: true})
    })
    .patch((req, res) => {
        res.json({ok: true})
    })
    .delete((req, res) => {
        res.json({ok: false})
    })

export default router;
