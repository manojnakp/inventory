import { Router } from 'express';
const router = Router();

router.param('uid', (req, res, next, id) => {
    console.log('{uid} param used');
    next();
});

router.route('/')
    .get((req, res) => {
        res.json({ok: true});
    })
    .post((req, res) => {
        res.json({ok: false});
    });

router.route('/:uid')
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