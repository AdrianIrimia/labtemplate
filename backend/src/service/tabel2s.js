/**
 * Created by Rize on 09-Jan-18.
 */
"use strict";

const tabel2s = require('../models/index').tabel2;

exports.list = function (req, res) {
    tabel2s.findAll().then(tabel2s => {
        res.jsonp(tabel2s);
    }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
    res.jsonp(tabel2s.create(req.body));
};

exports.findById = function (req, res) {
    let idFilm2 = req.params.idFilm2;
    tabel2s.findById(idFilm2).then(tabel2s => {
        if (!table2s) {
            return res.status(400).send({
                message: 'Tabel2s  Not Found',
            });
        }
        res.jsonp(tabel2s);
    });
};

exports.delete = function (req, res) {
    let idFilm2 = req.params.idFilm2;
    tabel2s.findById(req.params.idFilm2)
        .then(tabel2s => {
            if (!tabel2s) {
                return res.status(400).send({
                    message: 'Tabels2 Not Found',
                });
            }
            return tabel2s
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};