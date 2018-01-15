/**
 * Created by Rize on 09-Jan-18.
 */

"use strict";

const tabel1s = require('../models/index').tabel1;

exports.list = function (req, res) {
    tabel1s.findAll().then(tabel1s => {
        res.jsonp(tabel1s);
    }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
    res.jsonp(tabel1s.create(req.body));
};

exports.findById = function (req, res) {
    let idFilm1 = req.params.idFilm1;
    tabel1s.findById(idFilm1).then(tabel1s => {
        if (!table1s) {
            return res.status(400).send({
                message: 'Tabel1s  Not Found',
            });
        }
        res.jsonp(tabel1s);
    });
};

exports.delete = function (req, res) {
    let idFilm1 = req.params.idFilm1;
    tabel1s.findById(req.params.idFilm1)
        .then(tabel1s => {
            if (!tabel1s) {
                return res.status(400).send({
                    message: 'Tabel1s Not Found',
                });
            }
            return tabel1s
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};