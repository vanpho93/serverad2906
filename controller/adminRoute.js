const express = require('express');

const route = express.Router();

route.get('/', (req, res) => res.render('admin', { arrAds }));

module.exports = route;

// sanPham, loaiSanPham, hoaDon

class Ad {
    constructor(id, branch, link, image) {
        this.id = id;
        this.branch = branch;
        this.link = link;
        this.image = image;
    }
}

const arrAds = [
    new Ad(1, 'Facebook', 'facebook.com', '1.png'),
    new Ad(2, 'Twitter', 'twitter.com', '2.png'),
    new Ad(3, 'Instagram', 'instagram.com', '3.png'),
    new Ad(4, 'Google', 'plus.google.com', '4.png')
];

