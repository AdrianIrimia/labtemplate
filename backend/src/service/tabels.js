"use strict";

const tabels = require('../models/index').tabel;

exports.list = function (req, res) {
    tabels.findAll().then(tabels => {
        res.jsonp(tabels);
    }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
    res.jsonp(tabels.create(req.body));
};

exports.findById = function (req, res) {
    let idFilm = req.params.idFilm;
    tabels.findById(idFilm).then(tabels => {
        if (!tables) {
            return res.status(400).send({
                message: 'Tabels  Not Found',
            });
        }
        res.jsonp(tabels);
    });
};

exports.delete = function (req, res) {
    let idFilm = req.params.idFilm;
    tabels.findById(req.params.idFilm)
        .then(tabels => {
            if (!tabels) {
                return res.status(400).send({
                    message: 'Tabels Not Found',
                });
            }
            return tabels
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};